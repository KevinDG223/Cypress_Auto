describe('Handling Child Windows', () =>{
    it('Should handle child window', () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()    //Abrir una ventana nueva sin cambiar de pestaña para no salir de Cypress
        
        cy.origin("https://www.qaclickacademy.com", () => 
        {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get('.col-lg-5 > .section-title > h2').should('contain', 'QAClick Academy')
        })
        
    })
})