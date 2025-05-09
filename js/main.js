// Importa la configurazione del sito
import config from '../site.config.js';

// Sostituisci i placeholder con i valori della configurazione
document.addEventListener('DOMContentLoaded', () => {
  // Sostituisci i placeholder nel documento
  document.title = config.siteTitle;
  
  // Sostituisci tutti gli elementi con placeholder
  document.body.innerHTML = document.body.innerHTML.replace(/\{\{ siteTitle \}\}/g, config.siteTitle);
  document.body.innerHTML = document.body.innerHTML.replace(/\[Nome Fotografo\]/g, config.siteTitle.split('–')[1].trim());
  
  // Gestione pulsante scroll-to-top
  const scrollTopButton = document.getElementById('scrollTop');
  if (scrollTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopButton.classList.remove('hidden');
      } else {
        scrollTopButton.classList.add('hidden');
      }
    });
    
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Gestione slideshow automatico nella hero section
  const heroSlideshow = document.getElementById('hero-slideshow');
  if (heroSlideshow) {
    const slides = heroSlideshow.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // Funzione per cambiare slide
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    // Avvia lo slideshow automatico ogni 4 secondi
    setInterval(nextSlide, 4000);
  }
  
  // Animazioni per le immagini al caricamento
  const projectImages = document.querySelectorAll('.project-card img');
  if (projectImages.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, { threshold: 0.1 });
    
    projectImages.forEach(img => {
      img.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
      observer.observe(img);
    });
  }
});
