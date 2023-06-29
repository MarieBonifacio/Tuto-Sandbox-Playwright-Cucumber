Feature: feature to test adding product to the shopping
  Scenario: Check the functionality adding to the cart

    Given l'utilisateur click sur la barre de recherche
    When  l'utilisateur tape "masques" dans la barre de recherche
    When  l'utilisateur lance la recherche
    When  l'utilisateur click sur la quantite de produit
    When  l'utilisateur ajoute le produit au panier
    When  l'utilisateur consulte le panier
    Then  l'utilisateur valide le panier
