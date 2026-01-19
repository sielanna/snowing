

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Obsługa Menu Mobilnego ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Zamykanie menu po kliknięciu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // --- 2. Animacje podczas przewijania (Scroll Observer) ---
    const observerOptions = {
        threshold: 0.1 // Animacja startuje gdy 10% elementu jest widoczne
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Znajdź wszystkie elementy do animacji
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
