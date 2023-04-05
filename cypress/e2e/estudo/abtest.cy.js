

describe('Testing A/B test',() => {
    Cypress.Cookies.debug(true)
    beforeEach(() => {
        
        cy.visit('')


    })

    it('Verify Text inside A/B test',() => {
        const text = '\n    Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'

        cy.get('[href="/abtest"]').click()
        cy.get('div.example > p').should('have.text',text)

    })
    it('A/B testing with Cookie',() => {
        const header1 = 'A/B Test Control'
        const header2 = 'A/B Test Variation 1'
        const headeroptout = 'No A/B Test'
        
        cy.get('[href="/abtest"]').click()
        
        cy.get('div.example > h3').invoke('text').should('be.oneOf',[header1,header2])
        cy.setCookie('optimizelyOptOut','true');
        cy.reload()
        cy.get('div.example > h3').should('have.text',headeroptout)
    })
    it('Opt out via URL', () => {
        cy.visit('/abtest?optimizely_opt_out=true')
        cy.get('div.example > h3').should('have.text','No A/B Test')
    })

})
