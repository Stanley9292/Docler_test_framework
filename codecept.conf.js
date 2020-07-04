exports.config = {
  tests: 'tests/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://uitest.duodecadits.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Docler_Framework',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  include: {
    HomePage: "./pages/HomePage.js",
    FormPage: "./pages/FormPage.js",
    ErrorPage: './pages/ErrorPage.js',
  }
}