document.addEventListener('DOMContentLoaded', () => {

  // Scroll reveal effect
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

  const actualYear = document.getElementById("year");
  if (actualYear) {
    actualYear.textContent = new Date().getFullYear();
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
