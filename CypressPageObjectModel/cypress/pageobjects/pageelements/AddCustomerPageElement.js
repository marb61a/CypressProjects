/// <reference types="cypress" />

const or = require('../../locators.json');

export default class AddCustomerPageElements{
    addCustomerBtn(){
        return cy.get(or.addcustomerpage.addCustBtn);
    }

    firstNameField(){
        return cy.get(or.addcustomerpage.firstName);
    }

    lastNameField(){
        return cy.get(or.addcustomerpage.lastName);
    }

}