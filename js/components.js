// Script per caricare i componenti
document.addEventListener('DOMContentLoaded', function() {
  // Determina il percorso base in base alla posizione della pagina corrente
  const isInSubfolder = window.location.pathname.includes('/projects/');
  const basePath = isInSubfolder ? '../' : './';
  
  // Carica il menu
  const menuPlaceholders = document.querySelectorAll('[data-component="menu"]');
  if (menuPlaceholders.length > 0) {
    fetch(basePath + 'components/menu.html')
      .then(response => response.text())
      .then(html => {
        // Aggiusta i link nel menu in base alla posizione corrente
        if (isInSubfolder) {
          html = html.replace(/href="([^"]*)"/g, function(match, p1) {
            // Aggiungi '../' ai link nelle pagine di sottocartella tranne per i link che già iniziano con '../'
            return p1.startsWith('../') ? match : 'href="../' + p1 + '"';
          });
        }
        menuPlaceholders.forEach(placeholder => {
          placeholder.innerHTML = html;
        });
        // Inizializza gli event listener del menu dopo il caricamento
        initMenuListeners();
      })
      .catch(error => console.error('Errore nel caricamento del menu:', error));
  }

  // Carica il footer
  const footerPlaceholders = document.querySelectorAll('[data-component="footer"]');
  if (footerPlaceholders.length > 0) {
    fetch(basePath + 'components/footer.html')
      .then(response => response.text())
      .then(html => {
        // Aggiusta i link nel footer in base alla posizione corrente
        if (isInSubfolder) {
          html = html.replace(/href="projects//g, 'href="../projects/');
        }
        footerPlaceholders.forEach(placeholder => {
          placeholder.innerHTML = html;
        });
      })
      .catch(error => console.error('Errore nel caricamento del footer:', error));
  }
});

// Inizializza gli event listener per il menu mobile
function initMenuListeners() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeMenuBtn = document.getElementById('close-menu');
  
  if (menuToggle && menuOverlay && closeMenuBtn) {
    // Funzione per aprire il menu
    function openMenu() {
      menuOverlay.classList.remove('hidden');
      menuOverlay.classList.add('flex');
    }
    
    // Funzione per chiudere il menu
    function closeMenu() {
      menuOverlay.classList.remove('flex');
      menuOverlay.classList.add('hidden');
    }
    
    // Event listener per il pulsante di apertura del menu
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      openMenu();
    });
    
    // Event listener per il pulsante di chiusura del menu
    closeMenuBtn.addEventListener('click', closeMenu);
  }
}
