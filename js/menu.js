// Menu hamburger semplificato per desktop e mobile

document.addEventListener('DOMContentLoaded', function() {
  console.log('Menu script loaded');
  
  // Ottieni riferimenti agli elementi del menu
  const menuToggle = document.getElementById('menu-toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeMenuBtn = document.getElementById('close-menu');
  
  // Verifica che tutti gli elementi necessari esistano
  if (!menuToggle || !menuOverlay || !closeMenuBtn) {
    console.error('Elementi del menu non trovati');
    return;
  }
  
  console.log('Menu elements found');
  
  // Funzioni per aprire e chiudere il menu
  function openMenu() {
    console.log('Opening menu');
    menuOverlay.classList.remove('hidden');
    menuOverlay.classList.add('flex');
  }
  
  function closeMenu() {
    console.log('Closing menu');
    menuOverlay.classList.remove('flex');
    menuOverlay.classList.add('hidden');
  }
  
  // Event listener per il pulsante di apertura del menu
  menuToggle.addEventListener('click', function(e) {
    console.log('Menu toggle clicked');
    e.preventDefault();
    openMenu();
  });
  
  // Event listener per il pulsante di chiusura del menu
  closeMenuBtn.addEventListener('click', function(e) {
    console.log('Close button clicked');
    e.preventDefault();
    closeMenu();
  });
  
  // Chiudi il menu quando si clicca fuori
  menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });
  
  // Chiudi il menu quando si preme ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !menuOverlay.classList.contains('hidden')) {
      closeMenu();
    }
  });
  
  // Gestisci i link nel menu
  const menuLinks = menuOverlay.querySelectorAll('nav a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Chiudi il menu con un piccolo ritardo per permettere l'effetto hover
      setTimeout(closeMenu, 100);
    });
  });
  
  console.log('Menu initialization complete');
});
