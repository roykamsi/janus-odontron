# Janus Odontron

Sito web moderno per Janus Odontron - Un dispositivo rivoluzionario di protonterapia a doppio gantry.

## Descrizione

Questa è la seconda versione del sito, completamente riscritta in React con Vite per prestazioni ottimali.
Precedentemente era stato fatto con WordPress + Elementor.

## Stack Tecnologico

- React 18
- Vite (build tool ultra-veloce)
- CSS moderno con design responsivo
- Pronto per il deployment su Vercel

## Installazione

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`

## Preview Build

```bash
npm run preview
```

## Deploy su Vercel

### Opzione 1: Deploy automatico
1. Fai push del repository su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Vercel rileverà automaticamente le impostazioni Vite

### Opzione 2: Deploy con Vercel CLI
```bash
npm install -g vercel
vercel
```

## Struttura del Progetto

```
janus-odontron/
├── public/
│   └── images/          # Immagini e assets statici
├── src/
│   ├── App.jsx          # Componente principale
│   ├── App.css          # Stili principali
│   ├── main.jsx         # Entry point
│   └── index.css        # Stili globali
├── index.html           # Template HTML
├── vite.config.js       # Configurazione Vite
└── package.json         # Dipendenze

```

## Caratteristiche

- Design completamente responsivo
- Ottimizzato per SEO
- Caricamento ultra-veloce
- Supporto per video embed (Vimeo)
- Animazioni e transizioni fluide
- Compatibile con tutti i browser moderni

## Autore

Website designed by [roykamsi.com](https://www.roykamsi.com)

## Licenza

© 2025 Janus-Odontron