/// <reference types="cypress" />

import OpenAccountPageElements from '../pageelements/OpenAccountPageElements';

export default class OpenAccountPageActions{
    constructor(){
        globalThis.openaccountelements = new OpenAccountPageElements();
    }

}
