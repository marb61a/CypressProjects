/// <reference types="cypress" />
import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`I type a username {}`, (username) => {
    cy.get('#text').type(username);
});
