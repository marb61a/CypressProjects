/// <reference types="cypress" />

import { Given, When }  from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com"

Given(`I navigate to the webdriveruniversity hompeage`, () => {
    cy.visit(url)
});

When(`I click on the contact us button`, () => {
    // Removes an attribute from the DOM on a certain element
    cy.get("#contact-us").invoke("removeAttr", "target").click();
});
