import exportFixture from '../fixtures/default-export.json'

describe('the vortex core default configuration', () => {
    before(() => {
        cy.visit('/')
    })

    it('can be exported as text file', () => {
        cy.get('#main-actions button.save-json').click()
        cy.readFile('tests/output/cypress-downloads/export.txt').then((exportedFile) => {
            const exported = JSON.parse(exportedFile)
            assert.deepEqual(exported, exportFixture)
        })
    })

    it('can be exported as binary file', () => {
        cy.get('#main-actions button.generate-custom-binary').click()
        cy.readFile('tests/output/cypress-downloads/layout.cys').then((binaryExport) => {
            cy.fixture('./layout.cys').then((fixture) => {
                expect(binaryExport).to.equal(fixture)
            })
        })
    })

    it('displays the right values for macro and byte counters, on layout #0', () => {
        cy.get('.macro-limit span').contains('0/20')
        cy.get('.memory-limit span').contains('384/8192 Bytes')
    })

    it('displays the right values for macro and byte counters, on layout #1', () => {
        cy.get('.button__layout1').click()
        cy.get('.macro-limit span').contains('0/20')
        cy.get('.memory-limit span').contains('384/8192 Bytes')
    })

    it('displays the right values for macro and byte counters, on layout #2', () => {
        cy.get('.button__layout2').click()
        cy.get('.macro-limit span').contains('0/20')
        cy.get('.memory-limit span').contains('384/8192 Bytes')
    })

    it('displays the right values for macro and byte counters, on layout #3', () => {
        cy.get('.button__layout3').click()
        cy.get('.macro-limit span').contains('0/20')
        cy.get('.memory-limit span').contains('384/8192 Bytes')
    })
})
