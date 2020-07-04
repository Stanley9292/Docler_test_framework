Feature('Testing the error page');

Scenario('REQ-UI-07 Check that 404 HTTP response is present in Error Page.', (I, HomePage, ErrorPage) => {
    I.amOnPage(ErrorPage.errorPageLink);
    I.see(ErrorPage.errorPageMessage);
});

