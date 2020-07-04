const { I } = inject();

module.exports = {

  // insert your locators and methods here
  formPageLink: 'http://uitest.duodecadits.com/form.html',
  formPageLinkAlex: 'http://uitest.duodecadits.com/hello.html?myName=Alexandru',
  formPageLogo: '#dh_logo',
  formPageButton: '#form',
  formInputBox: '#hello-input',
  formSubmitButton: '#hello-submit',
  helloMessage: 'Hello Alexandru!',
  formActiveButton: '//li[@class="active"]//a[@id="form"]',

  // method to go to Form Page
  goToFormPage() {
    I.click(this.formPageButton);
  },
}
