const {expect} = require ('@playwright/test');
const fs = require('fs');


class MyAccountPage {
    constructor(page) {
        this.page = page;
        this.seeAllContractsButtonLocator = '//*[@id="account"]/div/div/section[1]/div[2]/a';
           
    }

    async mockContractsPreview() {
        await page.route('**/member/v2/members/me/checkins?statuses=**&size=2&page=0', async (route) => {
            // Read the JSON file content
            const jsonContent = await fs.promises.readFile('contractsPreview.json', 'utf-8');
            
            // Fulfill the request with the JSON content
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: jsonContent,  // Send the JSON file content as the response body
            });
        });
    }

    async mockContractsList() {
        await page.route('**/member/v2/members/me/checkins?statuses=VALIDATED,CLOSED&size=10&page=0', async (route) => {
            // Read the JSON file content
            const jsonContent = await fs.promises.readFile('contractsList.json', 'utf-8');
            
            // Fulfill the request with the JSON content
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: jsonContent,  // Send the JSON file content as the response body
            });
        });
    }



    async clickOnSeeAllContractsButton() {
        console.log('HEY');
        const locator = await this.page.locator(this.seeAllContractsButtonLocator);
    //     await expect(locator).toBeVisible();
        await this.page.click(this.seeAllContractsButtonLocator);
    }
    
}

module.exports = MyAccountPage;

