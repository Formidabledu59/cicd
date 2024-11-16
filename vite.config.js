import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',  // Utilise le dossier 'public' comme racine
  build: {
    outDir: '../dist',  // Le dossier où tu veux que les fichiers de build soient placés (au niveau de la racine du projet)
  },
  server: {
    open: true,  // Ouvre automatiquement ton navigateur à l'adresse locale
  }
})
