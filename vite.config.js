import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["mariage.jpg", "reunions.jpg", "anniversaire.jpg"],
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "/index.html",
        page1: "/fraises/fraises.html",
        page2: "/kiwi/kiwi.html",
        page3: "/bananes/bananes.html",
        page4: "/citrons/citrons.html",
        page5: "/mangues/mangues.html",
      },
    },
  },
});
