// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission (client-side validation)
document.querySelector('button[type="button"]').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill out all fields');
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // In a real-world scenario, you would send this to a backend service
    alert('Message sent successfully! I will get back to you soon.');
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    // Show loading animation for 2.5 seconds
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            document.body.removeChild(loader);
        });
    }, 2500); // Increased from 1000ms to 2500ms
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
