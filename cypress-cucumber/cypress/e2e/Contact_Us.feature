Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
    
    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form submission - Using  specific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type a specific email address "sarah_woods101@mail.com"
        And I type a specific word "hello123" and the number 6789 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario Outline: Validate Contact Us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I enter an email address '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress           | comment               | message                      |
            | John      | Jones    | jon_jones@mail.com     | How are you?          | Thank you for your message   |
            | Mia       | Carter   | mia_certer123@mail.com |test123 test 321       | Thank you for your message   |
            | Grace     | Hudson   | grace_hudson           | Do you make websites? | Error: Invalid email address |
