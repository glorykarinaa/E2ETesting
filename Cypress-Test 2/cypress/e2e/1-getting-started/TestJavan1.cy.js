describe('Validate Contact Javan Functionality', () => {

    it ('Validate contact with Invalid Phone/Whatsapp Format', () => {
         cy.visit("https://javan.co.id")
         cy.get('.border-blue-700').click()
         cy.get('#in_name').type('Mega Aswari')
         cy.get('#in_nickname').type('Mega')
         cy.get('#in_email').type('magodei144@gmail.com')
         cy.get('#in_phone').type('asdfrbbswerds')
         cy.get('#in_institution').type('Test Institusi')
         cy.get('select[id="in_subject"]').select('Email').should('have.value', 'Email')
         cy.get('#in_message').type('Just Test, Just Test Just Test, Just Test Just Test, Just Test')
       
        })
    })