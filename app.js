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