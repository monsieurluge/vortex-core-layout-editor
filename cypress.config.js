const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:1235',
        downloadsFolder: 'tests/output/cypress-downloads',
        fixturesFolder: 'tests/fixtures',
        screenshotOnRunFailure: false,
        specPattern: 'tests/e2e/**/*.cy.js',
        supportFile: false,
        video: false,
        videosFolder: 'tests/output/cypress-videos'
    }
})
