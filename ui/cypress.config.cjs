const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Setup node events if needed
    },
    baseUrl: 'http://localhost:5173',
  },
});
