document.addEventListener('DOMContentLoaded', () => {
  
    // Scroll reveal efekt
    const sections = document.querySelectorAll('section');
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
          section.classList.add('reveal');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // spustit i při načtení
  });
  