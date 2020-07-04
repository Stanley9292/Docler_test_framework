In order to run the tests please follow the instructions below:

Prerequisites: Selenium is installed

1. Clone the repo from here: https://github.com/Stanley9292/Docler_test_framework.git
2. Go to Docler_test_framework directory.
3. Run: npm init -y
4. Run: npm install codeceptjs puppeteer --save-dev
5. Run: npx codeceptjs init
6. Start an instance of webdriver, by running "selenium-standalone start"
7. Run all the tests by using "npx codeceptjs run"

Note: 
If you want to run by requirement: npx codeceptjs run --grep "REQ-UI-12"
