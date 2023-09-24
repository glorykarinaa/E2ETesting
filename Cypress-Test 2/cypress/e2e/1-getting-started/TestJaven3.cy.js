describe('Validate Knowledge Center Javan Functionality', () => {

    it ('Validate Placeholder on the  Category Field Change After Select The Category', () => {
         cy.visit("https://javan.co.id")
         cy.get(':nth-child(5) > .dropdown > button > .text-base').click()
         cy.contains ('span[class="text-base text-white"]', 'Portfolio').click()
         cy.get('a[href*="/portfolio-list"]').click()
         cy.contains('Portfolio Tahun 2023')
    })
    })