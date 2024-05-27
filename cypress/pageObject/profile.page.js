const { BasePage } = require("./base.page")

export class ProfilePage extends BasePage{
    static get url(){
        return "/profile"
    }
    static enterUsername(demouser){
        return cy.get('input#txt-username').type(demouser);
    };
    static enterPassword(demopass){
        return cy.get('input#txt-password').type(demopass)
    };
    static readDemoUsername() {
        return cy.get('input.form-control[placeholder=Username]').invoke('val');
    }
    
    static readDemoPassword() {
        return cy.get('input[placeholder=Password]').invoke('val');
    }
    static login(){
        return cy.get('button#btn-login').click()
    }
}