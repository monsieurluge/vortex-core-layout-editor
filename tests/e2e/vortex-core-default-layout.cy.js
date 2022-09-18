describe('the vortex core default layout', () => {
    it('is displayed as the main view', () => {
        cy.visit('/')
    })

    it('has an "import json" button', () => {
        cy.get('button').contains('Load JSON')
    })

    it('has an "export as json" button', () => {
        cy.get('button').contains('Save JSON')
    })

    it('has a "generate binary" button', () => {
        cy.get('button').contains('Generate Binary (Vortex)')
    })

    it('has a "generate custom binary" button', () => {
        cy.get('button').contains('Generate Binary (Custom)')
    })

    it('shows a profile selector containing 4 layout buttons', () => {
        cy.get('nav a').contains('L0')
        cy.get('nav a').contains('L1')
        cy.get('nav a').contains('L2')
        cy.get('nav a').contains('L3')
    })

    it('displays a macro counter set at 0 (no macro))', () => {
        cy.get('.macro-limit span').contains('0/20')
    })

    it('displays a byte counter set at 384', () => {
        cy.get('.memory-limit span').contains('384/8192 Bytes')
    })
})
