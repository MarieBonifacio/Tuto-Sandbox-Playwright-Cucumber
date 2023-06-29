# Tutoriel Playwright-Cucumber
![](https://playwright.dev/img/playwright-logo.svg)**&**![](https://cucumber.io/cucumber/media/images/logos/icons/cucumber-open-icon.svg)

Tutoriel de l'outil d'automatisation de test Playwright en incluant Cucumber

## Installation de Playwright
```shell
npm init playwright@latest
```
Exécutez la commande d'installation et sélectionnez les éléments suivants pour commencer :

* Choisissez entre TypeScript ou JavaScript (la valeur par défaut est TypeScript)
* Nommez votre dossier Tests (la valeur par défaut est tests ou e2e si vous avez déjà un dossier tests dans votre projet)
* Ajoutez un workflow GitHub Actions pour exécuter facilement des tests sur CI
* Installer les navigateurs Playwright (la valeur par défaut est true)


## Installation de Cucumber

```shell
npm i @cucumber/cucumber -D 
```

```shell
npm i ts-node -D 

```
Suppression des dossiers tests, tests-examples et playwright.

Modification du fichier ```package.json``` pour y ajouter dans le script le code suivant:
````json
 "scripts": {
    "test": "cucumber-js test"
  },
````

Création d'un fichier de config cucumber, ```cucumber.json```:
1. Inscrire le chemin des tests par le path
2. pour supprimer le message d'inforamtion de cucumber ajouter une ligne
````json
"publishQuiet": true
````

## Exécution d'un example de test

````shell
npx playwright test
````
Exécutez vos tests avec le mode UI pour une meilleure expérience développeur 
````shell
npx playwright test --ui
````