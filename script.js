document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section.hidden");
    
    const checkVisibility = () => {
      const firstSection = sections[0];
      const rect = firstSection.getBoundingClientRect();
  
      // Controllo se la prima sezione è in cima al viewport
      if (rect.top <= 0) {
        sections.forEach(section => {
          section.classList.add("visible");
        });
      } else {
        sections.forEach(section => {
          section.classList.remove("visible");
        });
      }
    };
  
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Controlla la visibilità all'apertura della pagina
  });
  