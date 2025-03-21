// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
    // Puedes añadir otros reportes si los necesitas, por ejemplo:
    // ['json', { outputFile: 'test-results.json' }],
  ],
  use: {
    headless: true, // Puedes cambiarlo a false si deseas ver el navegador mientras se ejecutan las pruebas
  },
});
