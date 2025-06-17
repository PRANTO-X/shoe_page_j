console.log("Hello from script.js!");

// Add your JavaScript code here
// This is just a placeholder to get you started.
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        alert('You clicked the heading!');
    });
});
