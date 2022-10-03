const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:1235',
        downloadsFolder: 'tests/output/cypress-downloads',
        fixturesFolder: 'tests/fixtures',
        specPattern: 'tests/e2e/**/*.cy.js',
        supportFile: false,
        videosFolder: 'tests/output/cypress-videos'
    }
})
