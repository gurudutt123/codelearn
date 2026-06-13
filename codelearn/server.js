const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'super_secret_codelearn_key'; // In production, use env variables

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database setup
const db = new sqlite3.Database('./codelearn.sqlite', (err) => {
    if (err) {
        console.error("Database opening error: ", err);
    } else {
        console.log("Connected to the SQLite database.");
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT,
            progress TEXT
        )`);
    }
});

// --- API Endpoints ---

// Register
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({error: "Username and password required."});

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: "Server error" });
        
        db.run('INSERT INTO users (username, password, progress) VALUES (?, ?, ?)', [username, hash, '{}'], function(err) {
            if (err) {
                if (err.message.includes("UNIQUE constraint failed")) {
                    return res.status(400).json({ error: "Username already exists" });
                }
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ message: "User registered successfully", userId: this.lastID });
        });
    });
});

// Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (!user) return res.status(401).json({ error: "Invalid credentials" });

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '24h' });
                res.json({ message: "Login successful", token, progress: JSON.parse(user.progress || '{}') });
            } else {
                res.status(401).json({ error: "Invalid credentials" });
            }
        });
    });
});

// Save Progress
app.post('/api/progress', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: "No token provided" });

    jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ error: "Failed to authenticate token" });
        
        const progressStr = JSON.stringify(req.body.progress);
        db.run('UPDATE users SET progress = ? WHERE id = ?', [progressStr, decoded.id], (err) => {
            if (err) return res.status(500).json({ error: "Database error" });
            res.json({ message: "Progress saved successfully" });
        });
    });
});

// Fetch Content (Markdown)
app.get('/api/content/:subject/:module', (req, res) => {
    const { subject, module } = req.params;
    const filePath = path.join(__dirname, 'content', `${subject}_${module}.md`);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error: "Content not found" });
        }
        res.json({ content: data });
    });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
