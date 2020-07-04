Feature('Testing the form page');

Scenario('REQ-UI-01 Check that "UI Testing Site" tab is present', (I, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    I.see('UI Testing');
});

Scenario('REQ-UI-02 Check that "Docler Holding" logo is present', (I, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    I.seeElementInDOM(FormPage.formPageLogo);
});

Scenario('REQ-UI-05 Check that navigation to Form Page works', (I, HomePage, FormPage) => {
    I.amOnPage(HomePage.homePageLink);
    FormPage.goToFormPage();
    I.amOnPage(FormPage.formPageLink);
});

Scenario('REQ-UI-06 Check that Form Button has active status when clicked', async (I, HomePage, FormPage) => {
    I.amOnPage(HomePage.homePageLink);
    I.click(FormPage.formPageButton);
    I.amOnPage(FormPage.formPageLink);
    I.seeElement(FormPage.formActiveButton);
});

Scenario('REQ-UI-11 Check that input box and submit buttton is visible', (I, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    I.seeElement(FormPage.formInputBox);
    I.seeElement(FormPage.formSubmitButton);
});

Scenario('REQ-UI-12 Check that "Hello <result>!" works', (I, FormPage) => {
    I.amOnPage(FormPage.formPageLink);
    I.fillField(FormPage.formInputBox, 'Alexandru');
    I.click(FormPage.formSubmitButton);
    I.amOnPage(FormPage.formPageLinkAlex);
    I.see(FormPage.helloMessage);
});