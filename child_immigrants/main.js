/* ============================================
   UNACCOMPANIED — Migration Data Narrative
   main.js
   ============================================ */

// Scroll Reveal — fades elements in as they enter the viewport
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const siblings = entry.target.parentElement
          ? [...entry.target.parentElement.querySelectorAll('.reveal')]
          : [];
        const idx = siblings.indexOf(entry.target);
        const delay = idx * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
