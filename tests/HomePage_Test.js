var assert = require('assert');


Feature('Testing the home page');

Scenario('REQ-UI-01 Check that "UI Testing Site" tab is present', (I, HomePage) => {
    I.amOnPage(HomePage.homePageLink);
    I.see('UI Testing');
});

Scenario('REQ-UI-02 Check that "Docler Holding" logo is present', (I, HomePage) => {
    I.amOnPage(HomePage.homePageLink);
    I.seeElementInDOM(HomePage.homePageLogo);
});

Scenario('REQ-UI-03 Check that navigation to Home Page works', (I, HomePage, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    HomePage.goToHomePage();
    I.amOnPage(HomePage.homePageLink);
});

Scenario('REQ-UI-04 Check that Home Button has active status when clicked', async (I, HomePage, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    I.click(HomePage.homePageButton);
    I.amOnPage(HomePage.homePageLink);
    I.seeElement(HomePage.homeActiveButton);
});

Scenario('REQ-UI-08 Check that UI Testing button goes to Home Page', (I, HomePage, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    I.click(HomePage.uiTestingButton);
    I.amOnPage(HomePage.homePageLink);
});

Scenario('REQ-UI-09 Check that Welcome text is visible in <h1> tag', (I, HomePage, FormPage) => {
    I.amOnPage(HomePage.homePageLink);
    I.seeInSource(HomePage.welcomeText);
});

Scenario('REQ-UI-10 Check that description text is visible in <p> tag', (I, HomePage, FormPage) => {
    I.amOnPage(HomePage.homePageLink);
    I.seeInSource(HomePage.descriptionText);
});


