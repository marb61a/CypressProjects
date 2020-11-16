/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // Cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // cy.get('#contact-us > .thumbnail').click();
        // cy.get('#contact-us').click({
        //     force: true
        // });

        cy.get('[name="first_name"]').type("Martin");
        cy.get('[name="last_name"]').type("Byrne");
        cy.get('[name="email"]').type("abcd@gmail.com");
        cy.get('textarea.feedback-input').type("Learning Cypress");
        cy.get('[type="submit"]').click();

    });

    it("Should not be able to submit an unsuccessful submission via contact us form as all fields are required", () => {
        // Cypress code
        cy.get('[name="first_name"]').type("Martin");
        cy.get('[name="last_name"]').type("Byrne");
        cy.get('textarea.feedback-input').type("Learning Cypress");
        cy.get('[type="submit"]').click();

    });
});
