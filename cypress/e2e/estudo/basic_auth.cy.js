describe('Testing basic auth', () => {
    it('Negative test', () => {
       
        cy.visit('basic_auth',{failOnStatusCode: false})
        cy.get('body').should('contain.text','Not authorized')
    })
    
    it('Positive test', () => {

    
        cy.visit('basic_auth',{
            auth:{
                username: 'admin',
                password: 'admin'
            }}
        )
        cy.get('h3').should('have.text','Basic Auth')
        cy.get('p').should('have.text','\n    Congratulations! You must have the proper credentials.\n  ')
    })
    it('Positive test via url', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('h3').should('have.text','Basic Auth')
        cy.get('p').should('have.text','\n    Congratulations! You must have the proper credentials.\n  ')
    })

});