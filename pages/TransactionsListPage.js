const {expect} = require ('@playwright/test');
const fs = require('fs');

class TransactionsListPage {
    constructor(page) {
        this.page = page;
        this.firstContractLocator = '//*[@id="account"]/div/div/div[1]/div[2]/button'
    }

    async mockPdfContract() {
        await page.route('**/v1/checkins/**/documents/CONTRACT/download', async (route) => {
            const pdfContent = await fs.promises.readFile('mock-contract.pdf', 'utf-8');

            await route.fulfill({
                status: 200,
                contentType: 'application/pdf', // Set the correct MIME type for PDF
                body: pdfContent,  // Send the PDF file content as the response body
            });

        });
    }


    async clickOnTheFirstContractLink() {
        const locator = await this.page.locator(this.firstContractLocator);
        await expect(locator).toBeVisible();
        await this.page.click(this.firstContractLocator);
    }

}

module.exports = TransactionsListPage;