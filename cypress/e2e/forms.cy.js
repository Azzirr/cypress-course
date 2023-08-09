describe('Form test', () => {
    beforeEach(() => {
        cy.visit('/forms');
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i);
        cy.getDataTest('subscribe-form').find('input').type('testemail@cypresstest.com');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/Successfully subbed: testemail@cypresstest.com/i).should('exist');
    })
})