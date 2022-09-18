const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:1234',
        specPattern: "tests/e2e/**/*.cy.js",
        supportFile: false
    }
})
