import {Given, Then, When} from "@cucumber/cucumber";
import {btnCreerUnCompte, btnSeConnecter, connexionForm, goToRaja, inscriptionForm} from "../../helpers/donnes.help";
import {test} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await goToRaja(page);
});
    test("l'utilisateur se trouve sur le site et click sur le bouton se connecter", async ({page})=> {
        await btnSeConnecter(page);
    });
    test("l'utilisateur rempli le formulaire de connexion et le valide", async ({page}) =>{
        await connexionForm(page);
    });

