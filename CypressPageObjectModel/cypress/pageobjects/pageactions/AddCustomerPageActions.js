/// <reference types="cypress" />

import AddCustomerPageElements from '../pageelements/AddCustomerPageElements';

export default class AddCustomerPageActions{
    constructor(){
        globalThis.addcustElement = new AddCustomerPageElements();
    }

    addCustomerDetails(firstName, lastName, postCode){
        addcustElement.addCustomerBtn().click();
        addcustElement.firstNameField().type(firstName);
        addcustElement.lastNameField().type(lastName);
        addcustElement.postCodeField().type(postCode);
        addcustElement.addCustomerSubmitBtn().click()
    };

    // Handle the alert that pops up on registering a customer
    validateAlert(alertMsg){
        cy.on('window:alert', (alertText) => {
            expect(alertText).contains(alertText);
        });
    }

}