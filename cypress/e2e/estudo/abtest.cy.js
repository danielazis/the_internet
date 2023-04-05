

describe('Testing A/B test',() => {
    Cypress.Cookies.debug(true)
    beforeEach(() => {
        
        cy.visit('')


    })

    it('Testing A/B test control',() => {
        const header = 'A/B Test Control'
        const text = '\n    Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'
        
        cy.setCookie('optimizelyBuckets','%7B%22298349752%22%3A%22298291000%22%7D')
        cy.get('[href="/abtest"]').click()
        
        cy.get('div.example > p').should('have.text',text)
        cy.get('div.example > h3').invoke('text').should('equal',header)

    })
    it('Testing A/B Test Variation 1',() => {
        const header = 'A/B Test Variation 1'
        const text = '\n    Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'
        
        cy.setCookie('optimizelyBuckets','%7B%22298349752%22%3A%22298343790%22%7D')
        cy.get('[href="/abtest"]').click()
        
        cy.get('div.example > p').should('have.text',text)
        cy.get('div.example > h3').invoke('text').should('equal',header)

    })
    it('Testing No A/B test with Cookie',() => {
        
        const headeroptout = 'No A/B Test'

        cy.setCookie('optimizelyOptOut','true');
        cy.get('[href="/abtest"]').click()

        cy.get('div.example > h3').should('have.text',headeroptout)
    })
    it('Opt out via URL', () => {
        cy.visit('/abtest?optimizely_opt_out=true')
        cy.get('div.example > h3').should('have.text','No A/B Test')
    })

})
