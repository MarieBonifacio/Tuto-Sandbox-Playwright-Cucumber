# TutoPLaywrightCucumber
Tutoriel de l'outil d'automatisation de test Playwright en incluant Cucumber

Installation de playwright
```shell
npm init playwright@latest

```
Installation de cucumber

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
3. 