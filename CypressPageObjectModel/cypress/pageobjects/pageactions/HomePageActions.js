/// <reference types="cypress" />

import HomePageElements from '../pageelements/HomePageElements';

export default class HomePageActions {
    constructor(){
        // globalThis makes the variable available everywhere whithout calling this
        globalThis.element = new HomePageElements();
    }

    navigateToURL(){
        // Practice site
        cy.visit('/');
    }

    validateTitle(){
        return cy.title();
    }

    loginAsBankManager(){
        element.bankManagerLoginBtn().click();
    }

    loginAsCustomer(){
        element.customerLoginBtn().click();
    }

}
