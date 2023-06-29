Feature: feature to test search
  Scenario: Check searching through the searchbar

    Given l'utilisateur click sur la barre de recherche
    When  l'utilisateur tape "masques" dans la barre de recherche
    Then  l'utilisateur lance la recherche