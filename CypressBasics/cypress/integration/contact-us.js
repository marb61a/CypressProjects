/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // Cypress code
        cy.visit("http://www.webdriveruniversity.com/");
        // cy.get('#contact-us > .thumbnail').click();
        cy.get('#contact-us').click({
            force: true
        });

    });

    it("Should not be able to submit an unsuccessful submission via contact us form as all fields are required", () => {
        // Cypress code
    });
});
