describe('Testing Add/Remove element page', () => {
    beforeEach(() => {
        cy.visit('add_remove_elements/')
    });
    it('Adding element with mouse', () => {
        // Clicking the "Add Element" button
        cy.get('[onclick="addElement()"]').click()

        // Verifying if the "Delete" button exist
        cy.get('.added-manually').should('exist')
    
    });
    it('Adding element with keyboard', () => {
        cy.contains('Add Element').type('{enter}');

        // Verifying if the "Delete" button exist
        cy.get('.added-manually').should('exist')
    
    });
    it('Adding element with appaction', () => {
        // Clicking the "Add Element" button
        cy.window().invoke('addElement')

        // Verifying if the "Delete" button exist
        cy.get('.added-manually').should('exist')
    })
    it('Removing element', () => {
        // Clicking the "Add Element" button
        cy.get('[onclick="addElement()"]').click()
        cy.get('.added-manually').click()
        cy.get('.added-manually').should('not.exist')
        
    });
});