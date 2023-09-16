describe('Title on Login Page', () => {

   it ('Verify title possitive case', () => {
        cy.visit("https://pensiunq.staging.ittron.co.id/dplk/auth/login")
        cy.title().should('eq','Area Admin Dana Pensiun')
   })

   it ('Verify title negative case', () => {
      cy.visit("https://pensiunq.staging.ittron.co.id/dplk/auth/login")
      cy.title().should('eq','Area Admin DPLK')
   })
   
})