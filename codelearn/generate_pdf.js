const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
const outputPath = 'CodeLearn_Python_Expanded_Notes.pdf';
doc.pipe(fs.createWriteStream(outputPath));

const chapters = [
    "Introduction to Python",
    "Variables and Data Types",
    "Input Output and Operators",
    "Control Flow",
    "Strings and String Manipulation",
    "Lists and Tuples",
    "Dictionaries and Sets",
    "Functions and Scope",
    "File Handling",
    "Exception Handling",
    "Object-Oriented Programming (OOP)",
    "Modules and Packages",
    "Advanced Python Concepts",
    "Database Connectivity and APIs"
];

doc.fontSize(24).text('Python Expanded Notes - 14 Chapters', { align: 'center' });
doc.moveDown(2);

chapters.forEach((chapterName, index) => {
    doc.addPage();
    doc.fontSize(20).text(`Chapter ${index + 1}: ${chapterName}`, { underline: true });
    doc.moveDown();

    doc.fontSize(12);
    for (let i = 1; i <= 100; i++) {
        const pointText = `${i}. ${chapterName}: Explanation point ${i}. This point describes an important concept, example, use case, best practice, or interview-related idea that students should understand while studying ${chapterName}.`;
        doc.text(pointText, { align: 'justify' });
        doc.moveDown(0.5);
    }
});

doc.end();

console.log(`PDF generated successfully at ${outputPath}`);
