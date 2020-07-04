const { I } = inject();

module.exports = {

  // insert your locators and methods here

  homePageLink: 'http://uitest.duodecadits.com/',
  homePageLogo: '#dh_logo',
  homePageButton: '#home',
  uiTestingButton: '#site',
  welcomeText: '<h1>Welcome to the Docler Holding QA Department</h1>',
  descriptionText: '<p class="lead">This site is dedicated to perform some exercises and demonstrate automated web testing.</p>',
  homeActiveButton: '//li[@class="active"]//a[@id="home"]',

  // method to go to Home Page
  goToHomePage() {
    I.click(this.homePageButton);
  },

}
