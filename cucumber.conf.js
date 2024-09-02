const { BeforeAll, AfterAll, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { webkit, chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60000); // Default timeout

BeforeAll(async function () {
    console.log('Launching browser...');
    global.browser = await webkit.launch({
        headless: false,
        slowMo: 1000,
    });
    console.log('Browser launched');
    const context = await global.browser.newContext();
    global.page = await context.newPage();
    console.log('New page created');
});

AfterAll(async function () {
    console.log('Closing browser...');
    await global.browser.close();
    console.log('Browser closed');
});

After(async function (testCase) {
    const screenshotPath = `screenshots/${Date.now()}_${testCase.result.status}.png`;
    console.log(`Taking screenshot for ${testCase.result.status}`);
    await global.page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved to ${screenshotPath}`);
});