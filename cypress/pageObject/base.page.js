export class BasePage{
    static get url(){
        return "";
    };

    static visit(){
        return cy.visit(this.url);
    };
    static goToLogin(){
        return cy.get('a#btn-make-appointment').click()
    };
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
};