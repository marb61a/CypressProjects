/// <reference types="cypress" />
import { Then, When, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Executes prior to each Scenario\Test");
    cy.clearLocalStorage();
});

// Will execute tests matching tag
Before(() => {
    cy.log("Executing Smoke Pack");
});

After(() => {
    cy.log("Executes after each Scenario\Test");
});

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
} );
