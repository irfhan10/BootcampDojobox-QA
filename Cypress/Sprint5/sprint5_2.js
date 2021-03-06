describe('upload file', function() {
    // it('upload file', function() {
    //     cy.visit('https://admin.pkh.dojobox.id/')
    //     cy.get('#input-email').type('e@dojobox.id')
    //     cy.get('#input-password').type('admin')
    //     cy.get('#btn-login').click()
    //     cy.get('.d-flex > .btn').click()
    //     cy.get('input[type="file"]').attachFile('admin.png')
    // }),

    it('Tugas 5 Sprint 5', function() {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Zilong')
            .should('have.value', 'Zilong')
        cy.get('#lastName').type('Shu')
            .should('have.value', 'Shu')
        cy.get('#userEmail').type('zilong@gmail.com')
            .should('have.value', 'zilong@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
            .should('have.text', 'Male')
        cy.get('#userNumber').type('1234567890')
            .should('have.value', '1234567890')
        cy.get('#dateOfBirthInput', {force: true})
            .click().type('{selectall}','{backspace}').type('12 Dec 2000').type('{enter}')
            .should('have.value', '12 Dec 2000')
        cy.get('.subjects-auto-complete__value-container').type('Economics{enter}')
        cy.get('.subjects-auto-complete__value-container').type('MATHS{enter}')
        cy.get('.subjects-auto-complete__value-container').type('English{enter}')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            .should('have.text', 'Sports')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
            .should('have.text', 'Music')
        cy.get('#uploadPicture').attachFile('admin.png')
        cy.get('#currentAddress').type('Tangerang')
            .should('have.value', 'Tangerang')
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
        cy.get('#react-select-3-option-2').click()
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('#submit').click()
        cy.get('.modal-header')
            .should('have.text', 'Thanks for submitting the form')
    })

})
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
})