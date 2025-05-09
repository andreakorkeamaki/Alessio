# Portfolio Fotografico di Alessio

Questo è un sito portfolio fotografico responsive creato con HTML, CSS e JavaScript, utilizzando Tailwind CSS per lo styling. Il sito è progettato per mostrare le opere di un fotografo professionista in modo elegante e minimalista.

## Caratteristiche

- Design responsive e moderno
- Slideshow automatico nella sezione hero con transizioni fluide
- Layout pulito e minimalista ispirato a portfolio fotografici professionali
- Animazioni e transizioni fluide per migliorare l'esperienza utente
- Ottimizzato per dispositivi mobili e desktop
- Struttura organizzata per una facile manutenzione

## Struttura del Progetto

```
/
u251cu2500u2500 index.html          # Home page
u251cu2500u2500 projects.html       # Pagina dei progetti
u251cu2500u2500 about.html          # Pagina "Chi sono"
u251cu2500u2500 contact.html        # Pagina contatti
u251cu2500u2500 css/
u2502   u251cu2500u2500 input.css        # File sorgente CSS per Tailwind
u2502   u2514u2500u2500 styles.css       # CSS compilato
u251cu2500u2500 js/
u2502   u2514u2500u2500 main.js          # JavaScript principale
u251cu2500u2500 assets/
u2502   u2514u2500u2500 images/          # Cartella per le immagini
u251cu2500u2500 projects/           # Pagine individuali dei progetti
u251cu2500u2500 site.config.js      # Configurazione del sito
u251cu2500u2500 tailwind.config.js  # Configurazione di Tailwind CSS
u2514u2500u2500 package.json        # Dipendenze e script npm
```

## Requisiti

- Node.js (v14 o superiore)
- npm (v6 o superiore)

## Installazione

1. Clona o scarica il repository
2. Installa le dipendenze:

```bash
npm install
```

## Sviluppo

Per avviare il server di sviluppo:

```bash
npm start
```

Per compilare il CSS di Tailwind durante lo sviluppo:

```bash
npm run watch:css
```

## Compilazione per la produzione

Per compilare il CSS di Tailwind per la produzione:

```bash
npm run build:css
```

## Personalizzazione

### Configurazione del sito

Modifica il file `site.config.js` per aggiornare le informazioni del sito come titolo, email, categorie, ecc.

### Stile

Modifica il file `tailwind.config.js` per personalizzare i colori, i font e altri aspetti dello stile del sito.

### Immagini

Sostituisci le immagini nella cartella `assets/images/` con le tue foto. Assicurati di mantenere gli stessi nomi di file o aggiorna i riferimenti nel codice HTML.

## Note aggiuntive

Consulta il file `README_IMMAGINI.txt` per le specifiche sulle immagini necessarie per completare il sito.
