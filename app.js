// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.navbar').style.background = 'rgba(42, 42, 42, 0.95)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(42, 42, 42, 0.8)';
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in, .slide-up').forEach((el) => {
    observer.observe(el);
});

// Hero text animation
gsap.to(".hero-title span", {
    duration: 1,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "power4.out"
});

// Hover effect for price cards
document.querySelectorAll('.price-column').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
}); 