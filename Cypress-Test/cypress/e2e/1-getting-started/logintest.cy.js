describe('Validate Login Functionality', () => {

    it ('Validate login with Valid Credentials', () => {
         cy.visit("https://pensiunq.staging.ittron.co.id/dplk/auth/login")
         cy.get('#email').type('mandiridplk1@yopmail.com')
         cy.get('#password').type('Ittronoke354!')
         cy.get('.btn').click()
         cy.get('.welcome').contains('Selamat Datang')
        
         //cy.xpath('//input[@placeholder="Email"]').type('mandiridplk1@yopmail.com')
         //cy.xpath('//input[@placeholder="Kata Sandi"]').type('Ittronoke354!')
         //cy.xpath('//button[@class="btn btn-purple col-12 text-center"]').click()
         


    })
 
 })