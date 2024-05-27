const { AppointmentPage } = require("../pageObject/appointment.page");
const { BasePage } = require("../pageObject/base.page");
const { ProfilePage } = require("../pageObject/profile.page");


describe('MD2', () => {
  beforeEach(()=>{
    BasePage.visit();
    BasePage.goToLogin();
    
    ProfilePage.readDemoUsername().then((demoUsername) => {
      ProfilePage.enterUsername(demoUsername);
    });
    ProfilePage.readDemoPassword().then((demoPassword) => {
      ProfilePage.enterPassword(demoPassword);
    });
    ProfilePage.login();
  })
  context('Make an appointment',()=>{  
      it('passes', () => {


      AppointmentPage.setFacility();
      AppointmentPage.checkReadmissionBox();
      AppointmentPage.selectHealthcarePlan();
      AppointmentPage.selectVisitDate(30);
      AppointmentPage.addComment('CURA Healthcare Service');
      AppointmentPage.bookAppointment();
      /*
      */
    })
  })
  context('Appointment History Empty',()=>{
    it('passes',()=>{
      AppointmentPage.clickMenu()
      AppointmentPage.checkHistory()
    })
  })
})