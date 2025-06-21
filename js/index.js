
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic navigation background on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 20, 25, 0.98)';
    } else {
        nav.style.background = 'rgba(15, 20, 25, 0.95)';
    }
});

// Music play functionality
function playMusic(type) {
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '⏸ Lädt...';
    button.style.opacity = '0.7';

    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.opacity = '1';
        alert(`🎵 ${type} wird abgespielt... Lassen Sie sich von den Klängen berühren.`);
    }, 1500);
}

function listenSamples() {
    alert('🎵 Hörproben werden geladen... Tauchen Sie ein in die zarten Melodien für große und kleine Herzen.');
}

function orderBook() {
    alert('🛒 Weiterleitung zum Buchshop... Bringen Sie das Leuchten zu sich nach Hause.');
}

// Social media links
function openSocial(platform) {
    const messages = {
        'instagram': '📷 Instagram wird geöffnet... Folgen Sie uns für visuelle Einblicke in unsere Arbeit.',
        'youtube': '📺 YouTube wird geöffnet... Entdecken Sie unsere Musikvideos und Hörproben.',
        'spotify': '🎵 Spotify wird geöffnet... Hören Sie unsere Musik in voller Länge.'
    };
    alert(messages[platform] || 'Social Media Link wird geöffnet...');
}

// Footer functions
function showImprint() {
    const imprintContent = `
📋 IMPRESSUM

Lichttropfen Records GesbR
Sitz: Linz, Österreich

Geschäftsführung:
• Mag. Olivia Herrmannsdörfer MSc (Psychotherapeutin)
• Anthony Aue Robles (DJ, Klangkünstler & Frequenzarchitekt)

Kontakt:
📧 kontakt@lichttropfenrecords.com
📍 Linz, Österreich

Unternehmensgegenstand:
Musikproduktion, Verlag, therapeutische Arbeit mit musikalischem Ausdruck

Alle Angaben ohne Gewähr. Änderungen vorbehalten.
    `;
    alert(imprintContent);
}

function showPrivacy() {
    const privacyContent = `
🔒 DATENSCHUTZERKLÄRUNG

Bei Lichttropfen Records nehmen wir den Schutz Ihrer persönlichen Daten ernst.

DATENERHEBUNG:
• Kontaktaufnahme: Name, E-Mail (nur bei direkter Kontaktaufnahme)
• Website-Nutzung: Keine Cookies, keine Tracking-Tools
• Musik-Streaming: Über externe Plattformen (eigene Datenschutzbestimmungen beachten)

DATENVERWENDUNG:
• Ausschließlich zur Beantwortung Ihrer Anfragen
• Keine Weitergabe an Dritte
• Keine kommerzielle Nutzung

IHRE RECHTE:
• Auskunft über gespeicherte Daten
• Löschung Ihrer Daten
• Widerruf erteilter Einwilligungen

Kontakt für Datenschutzfragen:
📧 kontakt@lichttropfenrecords.com

Stand: Januar 2025
    `;
    alert(privacyContent);
}

// Enhanced scroll effects
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    const speed = scrolled * 0.5;

    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Interactive elements enhancement
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effects to music cards
    const musicCards = document.querySelectorAll('.music-card');
    musicCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add typewriter effect to hero tagline
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        // Start typewriter effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Mobile menu toggle (if needed for responsive design)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Enhanced music player simulation
let currentlyPlaying = null;

function playMusic(type) {
    const button = event.target;
    const originalText = button.innerHTML;

    // Stop any currently playing music
    if (currentlyPlaying && currentlyPlaying !== button) {
        currentlyPlaying.innerHTML = currentlyPlaying.getAttribute('data-original-text');
        currentlyPlaying.style.opacity = '1';
    }

    button.setAttribute('data-original-text', originalText);
    button.innerHTML = '⏸ Lädt...';
    button.style.opacity = '0.7';
    currentlyPlaying = button;

    setTimeout(() => {
        button.innerHTML = '⏸ Spielt...';
        button.style.opacity = '1';

        // Simulate music playing for 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            currentlyPlaying = null;
        }, 3000);

        // Show playing notification
        showNotification(`🎵 ${type} wird abgespielt... Lassen Sie sich von den Klängen berühren.`);
    }, 1500);
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        color: #333;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}


// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Simple sound effect simulation
function playSound() {
    // Create audio context for a simple tone
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (AudioContext || webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    // Button animation
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'translateY(-2px)';
    }, 100);
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', createParticles);

// Add mouse interaction
document.addEventListener('mousemove', (e) => {
    const droplet = document.querySelector('.droplet-container');
    const rect = droplet.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / 50;
    const deltaY = (e.clientY - centerY) / 50;

    droplet.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
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
window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 0) {
        nav.classList.remove('hidden'); // Show nav
    } else {
        nav.classList.add('hidden'); // Hide nav
    }
});