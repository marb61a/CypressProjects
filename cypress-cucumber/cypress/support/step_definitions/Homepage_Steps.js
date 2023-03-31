/// <reference types="cypress" />

import { Given, When, Before }  from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";

Before(() => {
    cy.log("Executing commands inside homepage steps");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
    cy.visit(url);
});

When(`I click on the contact us button`, () => {
    // Removes an attribute from the DOM on a certain element
    cy.get("#contact-us").invoke("removeAttr", "target").click();
});

When(`I click on the login portal button`, () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click();
});
