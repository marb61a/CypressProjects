/// <reference types="cypress" />

import { When, Then }  from ("@badeball/cypress-cucumber-preprocessor");

When(`I type a first name`, () => {
    cy.get('[name="first_name"]').type("Joe");

});

When(`I type a last name`, () => {
    cy.get('[name="last_name"]').type("Bloggs");
});

When(`I enter an email address`, () => {
    cy.get('[name="email"]').type("joe_blogs123@mail.com");
});

When(`I type a comment`, () => {

});

When(`I click on the submit button`, () => {

});
