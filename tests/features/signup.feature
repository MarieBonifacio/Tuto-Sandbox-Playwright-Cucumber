Feature: feature to test signup functionality on the website
  Scenario: Check signup is successful with valid credentials as a simple user

    Given l'utilisateur se trouve sur le site et click sur le bouton se connecter
    When  l'utilisateur click sur le bouton creer un compte
    Then  l'utilisateur rempli le formulaire d'inscription et le valide
