/// <reference types="cypress" />

export default class HomePageElements {
    // Get the customer login button
    constructorLoginBtn(){
        return cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderMbox.padT20 > div:nth-child(1) > button');
    }

    // Get the bank manager login button
    bankManagerLoginBtn(){
        return cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderMbox.padT20 > div:nth-child(3) > button');
    }

}
