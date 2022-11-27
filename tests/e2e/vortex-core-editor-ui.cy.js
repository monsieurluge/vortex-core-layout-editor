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
        cy.get('.button__layout0').contains('L0')
        cy.get('.button__layout1').contains('L1')
        cy.get('.button__layout2').contains('L2')
        cy.get('.button__layout3').contains('L3')
    })

    it('sets the L0 layout as the active one', () => {
        cy.get('.button__layout0').should('have.class', 'uk-active')
    })

    it('allows to switch to the L1 layout', () => {
        cy.get('.button__layout1').click()
        cy.get('.button__layout1').should('have.class', 'uk-active')

    })

    it('allows to switch to the L2 layout', () => {
        cy.get('.button__layout2').click()
        cy.get('.button__layout2').should('have.class', 'uk-active')

    })

    it('allows to switch to the L3 layout', () => {
        cy.get('.button__layout3').click()
        cy.get('.button__layout3').should('have.class', 'uk-active')

    })
})
