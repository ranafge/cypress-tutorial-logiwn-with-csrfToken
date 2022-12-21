/// <reference types="cypress" />

describe('Login with -CsrfToken', function(){
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    console.log(username, password)


    it('Parse from csrf token from HTML', function() {
        cy.request('http://quotes.toscrape.com/login')
        .its("body")
        .then((body)=>{
            const $html = Cypress.$(body)
            const csrfToken = $html.find('form > input[type=hidden]:nth-child(1)').val();
            console.log(csrfToken)
          
        })
    })


})