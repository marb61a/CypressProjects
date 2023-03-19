Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
    
    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form submission - Using  specific data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a specific first name "Sarah"
        