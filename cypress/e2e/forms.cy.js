describe('Form test', () => {
    beforeEach(() => {
        cy.visit('/forms');
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i);
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
        cy.get('@subscribe-input').type('testemail@cypresstest.com');
        cy.contains(/Successfully subbed: testemail@cypresstest.com/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/Successfully subbed: testemail@cypresstest.com/i).should('exist');
        cy.wait(3000);
        cy.contains(/Successfully subbed: testemail@cypresstest.com/i).should('not.exist');

        cy.get('@subscribe-input').type('testemail@cypresstest.io');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/invalid email: testemail@cypresstest.io/i).should('exist');
    })
})