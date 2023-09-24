describe('Validate Knowledge Center Javan Functionality', () => {

    it ('Validate Placeholder on the  Category Field Change After Select The Category', () => {
         cy.visit("https://javan.co.id")
         cy.get(':nth-child(6) > .text-base').click()
         cy.get('#knowledge-btn-categories').click()
         cy.get('[href="https://javan.co.id/knowledge?category=BPMN"]').click()
         cy.get('#knowledge-btn-categories').contains('BPMN')
        })
    })