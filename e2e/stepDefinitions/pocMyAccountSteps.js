const LoginPage = require('../../pages/LoginPage.js');
const MyAccountPage = require('../../pages/MyAccountPage.js');
const TransactionsListPage = require('../../pages/TransactionsListPage.js');
const { Given, When, Then } = require('@cucumber/cucumber');


Given('the user goes to the account dashboard', async function () {
    let loginPage = new LoginPage(page); 
    await loginPage.launchUrl();  
  });

  Given('the user enters valid credentials {string} and {string}', async function (mail, password) {
    let loginPage = new LoginPage(page);
    await loginPage.enterMail(mail);
    await loginPage.validateMail();
    await loginPage.enterPassword(password);
  });

  Given('the user logs in his account', async function () {
    let loginPage = new LoginPage(page);
    let myAccountPage = new MyAccountPage(page);
    await myAccountPage.mockContractsPreview();
    await loginPage.clickLogin();
    // await loginPage.verifyLoginSuccess();
  });

  Given('the user clicks on "see all" in the contracts section', async function () {
    let myAccountPage = new MyAccountPage(page);
    await myAccountPage.mockContractsList();
    await myAccountPage.clickOnSeeAllContractsButton();
  });

  // Given('the transactions list is displayed', function () {
  //   let myAccountPage = new MyAccountPage(page);

  // });

  When('the user clicks on the first contract', async function () {
    let transactionsListPage = new TransactionsListPage(page);
    await transactionsListPage.mockPdfContract();
    await transactionsListPage.clickOnTheFirstContractLink();
  });

  // Then('the contract page is displayed', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });