describe('Verify user can add a bank account', () => {

    it ('Verify fill in the bank account form with valid data', () => {
         cy.visit("https://pensiunq.staging.ittron.co.id/dplk/auth/login")
         cy.get('#email').type('....')
         cy.get('#password').type('.....')
         cy.get('.btn').click()
         cy.get('.welcome').contains('Selamat Datang')
         cy.get('.sidenav-inner > :nth-child(3) > .sidenav-link').click()
         cy.get('a[href="https://pensiunq.staging.ittron.co.id/dplk/bank/add"]').click()
         cy.get('.select2-selection').click()
         cy.get('#select2-bankId-results > :nth-child(3) > div').click()
         cy.get('#accountHolder').type('Test123')
         cy.get('#accountNumber').type('021178920182919')
         cy.get("[type='submit']").click()
         cy.get('.action-confirm').click()
         cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Bank Negara Indonesia')


    })
 
 })
