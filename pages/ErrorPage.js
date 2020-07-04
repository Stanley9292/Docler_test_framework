const { I } = inject();

module.exports = {

  // insert your locators and methods here
  errorPageLink: 'http://uitest.duodecadits.com/error.html',
  errorPageLogo: '#dh_logo',
  errorPageButton: '#error',
  errorPageMessage: '404 Error: File not found :-(',

  // method to go to error Page
  goToErrorPage() {
    I.click(this.errorPageButton);
  },
}
