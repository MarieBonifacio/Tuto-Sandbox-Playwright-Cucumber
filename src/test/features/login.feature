Feature: feature to test login functionality on an admin
  Scenario: Check login is successful with valid credentials as an admin

    Given user is on "login page"
    When  "admin" enters username as "admin" and password as "azerty"
    And   clicks on "identification"
    Then  is redirected to "profile page"
