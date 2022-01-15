describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true)
    })

    it('visits the app', () => {
        cy.visit('/')
    })

    it('Learn React is link is present', () => {
        cy.visit('/');
        cy.contains("a", "Learn React");
    })
})

