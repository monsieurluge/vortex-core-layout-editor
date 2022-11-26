describe('the vortex core editor UI', () => {
    before(() => {
        cy.visit('/')
    })

    it('has an "import json" button', () => {
        cy.get('#main-actions button.load-json').contains('Load JSON')
    })

    it('has an "export as json" button', () => {
        cy.get('#main-actions button.save-json').contains('Save JSON')
    })

    it('has a "generate binary" button', () => {
        cy.get('#main-actions button.generate-vortexgear-binary').contains('Generate Binary (Vortex)')
    })

    it('has a "generate custom binary" button', () => {
        cy.get('#main-actions button.generate-custom-binary').contains('Generate Binary (Custom)')
    })

    it('shows a profile selector containing 4 layout buttons', () => {
        cy.get('nav a').contains('L0')
        cy.get('nav a').contains('L1')
        cy.get('nav a').contains('L2')
        cy.get('nav a').contains('L3')
    })
})
