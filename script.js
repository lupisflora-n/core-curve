// Scroll animation settings.
const MONITOR_COUNT = "5";

document.addEventListener('DOMContentLoaded', function () {
    const countDisplay = document.getElementById('monitor-count-display');
    if (countDisplay) countDisplay.textContent = MONITOR_COUNT;

    const fadeEls = document.querySelectorAll('.scroll-fade, .hope-shine');
    const glowEls = document.querySelectorAll('.glow-reveal');

    const checkVisibilityOnLoad = () => {
        const viewportBottom = window.scrollY + window.innerHeight;

        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (elementTop < viewportBottom) {
                el.classList.add('is-visible');
            }
        });

        glowEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (elementTop < viewportBottom) {
                el.classList.add('is-glowing');
            }
        });
    };

    checkVisibilityOnLoad();

    const releaseScrollLock = () => {
        document.body.classList.remove('is-locked');
    };

    ['touchstart', 'pointerdown', 'wheel', 'keydown'].forEach(eventName => {
        window.addEventListener(eventName, releaseScrollLock, { once: true, passive: true });
    });

    if (window.scrollY > 50) {
        releaseScrollLock();
        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint) scrollHint.style.display = 'none';
    } else {
        setTimeout(releaseScrollLock, 6000);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

    fadeEls.forEach(el => {
        if (!el.classList.contains('is-visible')) {
            observer.observe(el);
        }
    });

    const glowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-glowing');
                glowObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });

    glowEls.forEach(el => {
        if (!el.classList.contains('is-glowing')) {
            glowObserver.observe(el);
        }
    });

    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        const hideHintObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && window.scrollY > 100) {
                    scrollHint.style.display = 'none';
                    hideHintObserver.disconnect();
                }
            });
        }, { threshold: 0 });

        setTimeout(() => {
            hideHintObserver.observe(scrollHint);
        }, 6500);
    }
});
