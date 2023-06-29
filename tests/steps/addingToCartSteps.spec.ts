import {Given, Then, When} from "@cucumber/cucumber";
import {ajouterAuPanier, goToRaja} from "../../helpers/donnes.help";
import {test} from "@playwright/test";

    test.beforeEach(async ({page}) => {
        await goToRaja(page);
    });

    //@Given("l'utilisateur click sur la barre de recherche")
    test("l'utilisateur click sur la barre de recherche", async ({ page })=> {
        await page.locator('[data-cy="search-open"]').click();
    });
    //@When(`l'utilisateur tape {string} dans la barre de recherche`)
    test("l'utilisateur tape {string} dans la barre de recherche", async ({page}) =>{
    await page.locator('[data-cy="search-input"]').fill('masques');
    });
    //@And("l'utilisateur lance la recherche")
    test("l'utilisateur lance la recherche", async ({page}) =>{
    await page.locator('[data-cy="product"]').nth(0).click();
    });
    test("l'utilisateur click sur la quantite de produit", async ({page}) =>{
    await page.locator('#btn-quantity-more-MASQ3P2-desktop').click();
    });
    //@When("l'utilisateur ajoute le produit au panier")
    test("l'utilisateur ajoute le produit au panier", async ({page}) =>{
    await ajouterAuPanier(page);
    });
    //@When("l'utilisateur consulte le panier")
    test("l'utilisateur consulte le panier", async ({page}) =>{
    await page.locator('#open-cart-confirmation').click();
    await page.waitForTimeout(300);
    });
    //@Then("l'utilisateur valide le panier")
    test("l'utilisateur valide le panier", async ({page}) =>{
    await page.locator('#nextBtnStep1').click();
    await page.getByRole('button', {name:'Créer un compte', exact:true}).click();
    });