document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Elements
    const authModal = document.getElementById('auth-modal');
    const appLayout = document.getElementById('app-layout');
    const authForm = document.getElementById('auth-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const authError = document.getElementById('auth-error');
    const authSubmit = document.getElementById('auth-submit');
    const logoutBtn = document.getElementById('logout-btn');
    const currentUsername = document.getElementById('current-username');
    const contentArea = document.getElementById('content-area');
    const navItems = document.querySelectorAll('#sidebar-nav li');
    const moduleTitleSpan = document.getElementById('module-title');
    const searchInput = document.getElementById('search-input');

    // State
    let user = localStorage.getItem('codelearn_user');
    let email = localStorage.getItem('codelearn_email');
    let progress = JSON.parse(localStorage.getItem('codelearn_progress') || '{}');
    let currentModule = 'python_m1';

    // API Base
    const API_URL = '/api';

    // Handle Form Submission
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const userEmail = emailInput.value.trim();

        if (username && userEmail) {
            localStorage.setItem('codelearn_user', username);
            localStorage.setItem('codelearn_email', userEmail);
            initApp(username);
        } else {
            authError.innerText = "Please enter both name and email.";
        }
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('codelearn_user');
        localStorage.removeItem('codelearn_email');
        window.location.reload();
    });

    // Check auth on load
    if (user && email) {
        initApp(user);
    }

    function initApp(username) {
        authModal.classList.add('hidden');
        appLayout.classList.remove('hidden');
        currentUsername.innerText = username;
        loadContent(currentModule);
        // We removed updateNavState() because it was not defined
    }

    // Load Content
    async function loadContent(moduleId) {
        contentArea.innerHTML = '<div class="loader">Loading content...</div>';
        try {
            // we split module id, e.g. python_m1 -> subject: python, module: m1
            const parts = moduleId.split('_');
            const res = await fetch(`${API_URL}/content/${parts[0]}/${parts[1]}`);
            
            if (res.ok) {
                const data = await res.json();
                
                // Parse markdown
                const parsedHTML = marked.parse(data.content);
                contentArea.innerHTML = `<div class="markdown-body">${parsedHTML}</div>`;
                
                // Apply syntax highlighting
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
                
                contentArea.scrollTop = 0;
            } else {
                contentArea.innerHTML = `<div class="markdown-body"><h2>Content not found.</h2><p>The module ${moduleId} has not been created yet.</p></div>`;
            }
        } catch(err) {
            contentArea.innerHTML = `<div class="error-text">Failed to load content from server.</div>`;
        }
    }

    // Navigation Click Handler
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            if(target) {
                currentModule = target;
                moduleTitleSpan.innerText = item.innerText;
                loadContent(currentModule);
                
                navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                
                // Close mobile menu if open
                document.querySelector('.sidebar').classList.remove('active');
            }
        });
    });

    // Search Filtering
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        navItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(term)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Reading Progress Indicator
    contentArea.addEventListener('scroll', () => {
        const scrollTop = contentArea.scrollTop;
        const scrollHeight = contentArea.scrollHeight - contentArea.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        document.getElementById('reading-progress').style.width = scrolled + '%';
    });

    // Mobile Menu Toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Mark as completed
    document.getElementById('mark-complete-btn').addEventListener('click', () => {
        alert('Progress saved locally!');
        // Update local state
        progress[currentModule] = true;
        localStorage.setItem('codelearn_progress', JSON.stringify(progress));
    });
});
