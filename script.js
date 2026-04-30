// Simple fade-in animation on scroll
const cards = document.querySelectorAll('.card');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => appearOnScroll.observe(card));
