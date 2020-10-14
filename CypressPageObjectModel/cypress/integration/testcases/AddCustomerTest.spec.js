/// <reference types="cypress" />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions';
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions';

describe("Adding a new customer", () => {
    const homePage = new HomePageActions();
    const addCust = new AddCustomerPageActions();

    beforeEach(() => {
        homePage.navigateToURL();
    });

    it("Add Customer Details", () => {
        homePage.loginAsBankManager();
        addCust.addCustomerDetails("Martin", "Byrne", "123456");

    });

});
