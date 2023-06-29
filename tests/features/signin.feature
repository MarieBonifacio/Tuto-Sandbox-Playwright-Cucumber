Feature: feature to test login functionality on the website
  Scenario: Check login is successful with valid credentials as a simple user

    Given l'utilisateur se trouve sur le site et click sur le bouton se connecter
    Then l'utilisateur rempli le formulaire de connexion et le valide
