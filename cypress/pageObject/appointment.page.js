import { BasePage } from "./base.page";

export class AppointmentPage extends BasePage{
    static setFacility(){
        return cy.get('select').select('Seoul CURA Healthcare Center').invoke('val').should('eq','Seoul CURA Healthcare Center')
    }
    static checkReadmissionBox(){
        return cy.get('input#chk_hospotal_readmission').check().should('be.checked') 
    }
    static selectHealthcarePlan(){
        return cy.get('input#radio_program_medicare').click().should('be.checked','input#radio-program-medicare')
    }
    static selectVisitDate(date){
        return cy.get('div.input-group-addon').click()
        .then(() => {
          cy.get('table.table-condensed').contains('td.day', date).as('expval').click()
            .then(() => {
                cy.get('@expval').should('have.class', 'active');
            });
        });
    }
    static addComment(text){
        return cy.get('textarea#txt_comment.form-control').type(text).then(()=>
            cy.get('textarea#txt_comment.form-control').should('have.value',text));
    }
    static bookAppointment(){
        return cy.get('button#btn-book-appointment').click()
    }
    static clickMenu(){
        return cy.get('a#menu-toggle').click().then(()=>
        cy.get('nav#sidebar-wrapper').should('have.class','active'))
    }
    static checkHistory(){
        return cy.contains('a','History').click().then(()=>
        cy.get('div.col-sm-12.text-center').contains('p','No appointment.').should('have.text','No appointment.'))
    }
}