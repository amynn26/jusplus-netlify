import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Indique le répertoire racine de votre projet
  base: "/", // Base URL pour les chemins des assets
  build: {
    outDir: "../dist", // Répertoire de sortie pour les fichiers générés
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
        page1: "fraises/fraises.html",
        page2: "kiwi/kiwi.html",
        page3: "bananes/bananes.html",
        page4: "citrons/citrons.html",
        page5: "mangues/mangues.html",
      },
    },
  },
});
