/// <reference types="cypress"/>

export default{
    
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()   
        
    },

    validarMensagemErro(mensagem) {
        cy.get('.errorLabel')
            .then((element) =>{
                expect(element).to.be.visible
                expect(element.text()).eq(mensagem)
            })
    },

    preecnheNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preecnheEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencherSenha(senha){
        cy.get('#passwordXs')
            .type(senha)
    },
    validarMensagemSucesso(nome){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`) 
          

     
    }

}