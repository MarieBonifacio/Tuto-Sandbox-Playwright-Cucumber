import {Given, Then, When} from "@cucumber/cucumber";
import {btnCreerUnCompte, btnSeConnecter, goToRaja, inscriptionForm} from "../../helpers/donnes.help";
import {test} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await goToRaja(page);
});
    test.only("l'utilisateur s'inscrit", async ({page})=> {
        await btnSeConnecter(page);
        await btnSeConnecter(page);
        await inscriptionForm(page);
    });


/*
    test("l'utilisateur se trouve sur le site et click sur le bouton se connecter", async ({page})=> {
        await btnSeConnecter(page);
    });
    test("l'utilisateur click sur le bouton creer un compte", async ({page}) =>{
        await btnCreerUnCompte(page);
    });

    test("l'utilisateur rempli le formulaire d'inscription et le valide", async ({page}) =>{
        await inscriptionForm(page);
    });

 */