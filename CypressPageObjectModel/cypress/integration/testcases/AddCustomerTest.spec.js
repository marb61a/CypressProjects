/// <reference types="cypress" />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions';
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions';

describe("Adding a new customer", () => {
    const homePage = new HomePageActions();
    const addCust = new AddCustomerPageActions();

    before(() => {
        cy.fixture('testdata')
            .then((data) => {
                globalThis.data = data;
            });
    });

    beforeEach(() => {
        homePage.navigateToURL();
    });

    it("Add Customer Details", () => {
        homePage.loginAsBankManager();
        addCust.addCustomerDetails(data.firstname, data.lastname, data.postcode);
        addCust.validateAlert(data.alertmsg);
    });

});
