import exportFixture from '../fixtures/default-export.json'

describe('the vortex core default layout', () => {
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

    it('displays a macro counter set at 0 (no macro))', () => {
        cy.get('.macro-limit span').contains('0/20')
    })

    it('displays a byte counter set at 384', () => {
        cy.get('.memory-limit span').contains('384/8192 Bytes')
    })
})
