/// <reference types="cypress" />

import AddCustomerPageElements from '../pageelements/AddCustomerPageElements';

export default class AddCustomerPageActions{
    constructor(){
        globalThis.element = new AddCustomerPageElements();
    }

    addCustomerDetails(firstName, lastName, postCode){
        element.addCustomerBtn().click();
        element.firstNameField().type(firstName);
        element.lastNameField().type(lastName);
        element.postCodeField().type(postCode);

    }

    // Handle the alert that pops up on registering a customer
    validateAlert(alertMsg){
        cy.on('window:alert', (alertText) => {
            expect(alertText).eq(alertMsg);
        });
    }

}