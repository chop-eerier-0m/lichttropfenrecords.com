
// Toggle track content
function toggleTrack(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.track-icon');

    content.classList.toggle('active');

    if (content.classList.contains('active')) {
        icon.textContent = '−';
    } else {
        icon.textContent = '+';
    }
}

// Show/hide back to top button
window.addEventListener('scroll', function () {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Smooth scroll to top
document.getElementById('backToTop').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic navigation background on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 20, 25, 0.98)';
    } else {
        nav.style.background = 'rgba(15, 20, 25, 0.95)';
    }
});
// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');

    // Toggle menu icon
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (navLinks.classList.contains('mobile-active')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }

    // Prevent scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains('mobile-active') ? 'hidden' : '';
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('mobile-active')) {
            toggleMobileMenu();
        }
    });
});
