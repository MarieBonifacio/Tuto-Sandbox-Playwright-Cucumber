Feature: Account transactions list

  Scenario Outline: 
    Given the user goes to the account dashboard
    * the user enters valid credentials "<mail>" and "<password>"
    * the user logs in his account
    When the user clicks on "see all" in the contracts section
  #   * the transactions list is displayed
    Then the user clicks on the first contract
    # Then the contract page is displayed

Examples:
  | mail | password |
  |testautomyaccountdeux@alsolia.com | 24Yq7z8d*Sw?)T |


# Feature: feature to test adding product to the shopping
#   Scenario: Check the functionality adding to the cart

#     Given l'utilisateur click sur la barre de recherche
#     When  l'utilisateur tape "masques" dans la barre de recherche
#     When  l'utilisateur lance la recherche
#     When  l'utilisateur click sur la quantite de produit
#     When  l'utilisateur ajoute le produit au panier
#     When  l'utilisateur consulte le panier
#     Then  l'utilisateur valide le panier
