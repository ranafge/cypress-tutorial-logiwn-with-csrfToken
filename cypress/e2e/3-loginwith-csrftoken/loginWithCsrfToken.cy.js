/// <reference types="cypress" />

describe('Login with -CsrfToken', function(){
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    console.log(username, password)

    Cypress.Commands.add('loginWithCsrfToken', (csrfToken) =>{
        cy.request({url: 'http://quotes.toscrape.com/login',
                    method: 'POST',
                    form: true,
                    body: {
                        username,
                        password,
                        csrf_token: csrfToken
                    }
                }

            )
    })


    it('Parse from csrf token from HTML', function() {
        cy.request('http://quotes.toscrape.com/login')
        .its("body")
        .then((body)=>{
            const $html = Cypress.$(body)
            const csrfToken = $html.find('form > input[type=hidden]:nth-child(1)').val();
            console.log(csrfToken)
            cy.loginWithCsrfToken(csrfToken)
            .then((res)=>{
                expect(res.status).to.eql(200)
                expect(res.body).to.include('Logout')
                cy.visit(Cypress.env('baseUrl'))
            })


          
        })
    })


})