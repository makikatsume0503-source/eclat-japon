document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, we can stop observing if we only want it to animate once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // Force Hero content to appear after a short delay (on load)
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('visible'); // If we add 'visible' style
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.scroll-indicator').style.opacity = '0.6';
    }, 500);

    // Smooth scroll for anchors if any
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
