describe('test the inputs and submit the form', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/');
    })
    it("add text to inputs and submit form", function() {
        cy.get('input[name="name"]')
            .type('Christopher Harwell')
            .should("have.value", 'Christopher Harwell')
            .should("not.have.length.lessThan", 1);
        cy.get("input[name='email']")
            .type('chrisharwell72@gmail.com')
            .should("have.value", "chrisharwell72@gmail.com")
            .should("not.have.length.lessThan", 1);
        cy.get("input[name='password']")
            .type('aBcDeFg123')
            .should('have.value', 'aBcDeFg123')
            .should("not.have.length.lessThan", 1);
        cy.get("input[name='checkbox']")
            .click()
            .should('have.value', 'true')
            .should('not.have.value', 'false');
        cy.get('[data-cy=submit-button]')
            .click();


    });
});