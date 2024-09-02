const {expect} = require ('@playwright/test');
class LoginPage {
    constructor(page) {
        this.page = page;
            this.url = 'https://front-xp.ig1.dev-01.secondlifebff-stg-tmoq.decathlon.io/v1/my-account/base-10';
            this.headerLocator = 'h3';
            this.mailInputLocator = 'input[id="input-email"]';
            this.passwordInputLocator= 'input[id="input-password"]';
            this.signInButtonLocator = 'button[id="signin-button"]';
            this.goNextButtonLocator = 'button[type="submit"]';
    }

    async launchUrl() {
        await this.page.goto(this.url);
        const headerLocator = await this.page.locator(this.headerLocator);
        await expect (headerLocator).toBeVisible();
    }

    async enterMail(mail) {
        const locator = await this.page.locator(this.goNextButtonLocator);
        await this.page.fill(this.mailInputLocator, mail);
        await expect(locator).toBeVisible();
    }

    async validateMail() {
        await this.page.click(this.goNextButtonLocator);
    }

    async enterPassword(password) {
        const locator = await this.page.locator(this.passwordInputLocator);
        await expect(locator).toBeVisible();
        await this.page.fill(this.passwordInputLocator, password);
    }

    async clickLogin() {
        await this.page.click(this.signInButtonLocator);
    }

    async verifyLoginSuccess() {
        await expect(this.page.locator('//*([contains(text(), "Seconde vie")])[0]')).toBeVisible();
    }
    
}
module.exports = LoginPage;

