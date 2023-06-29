import {test} from "@playwright/test";
import {ajouterAuPanier, btnSeConnecter, connexionForm, goToRaja} from "../../helpers/donnes.help";
import {Given, Then, When} from "@cucumber/cucumber";

test.beforeEach(async ({page}) => {
    await goToRaja(page);
});
test("l'utilisateur click sur la barre de recherche", async ({page})=> {
    await page.locator('[data-cy="search-open"]').click();
});
test("l'utilisateur tape masques dans la barre de recherche", async ({page}) =>{
    await page.locator('[data-cy="search-input"]').fill("masques");
});
test("l'utilisateur lance la recherche", async ({page}) =>{
    await page.locator('[data-cy="product"]').nth(0).click();
});
