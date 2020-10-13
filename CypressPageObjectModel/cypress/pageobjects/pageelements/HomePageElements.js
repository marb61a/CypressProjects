/// <reference types="cypress" />

const or = require('../../locators.json');

export default class HomePageElements {
    // Get the customer login button
    constructorLoginBtn(){
        return cy.get(or.homepage.customerLoginButton);
    }

    // Get the bank manager login button
    bankManagerLoginBtn(){
        return cy.get(or.homepage.bankManagerLoginBtn);
    }

}
