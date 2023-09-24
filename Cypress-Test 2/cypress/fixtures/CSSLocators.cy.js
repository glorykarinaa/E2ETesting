describe('CSS Locators', ()  => {

        it('csslocators', () => {

            cy.visit("https://www.telerik.com/support/demos")

            cy.get('[id=js-tlrk-nav-search-link]').click({force: true})
            cy.get('[type=search]').type("kend")
            cy.get('.TK-Tag-Input-Button').click()
            cy.get('.TK-Search-Results-Query').contains("kend")


        })
})