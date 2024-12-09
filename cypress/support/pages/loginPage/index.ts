const elements = require('./elements').ELEMENTS;

class LoginPage {
    verificarTituloLoginPage(){
        cy.get(elements.loginLogo)
            .should('have.text', elements.tituloLoginPage)
    }

    digitarUsuario(usuario: string){
        cy.get(elements.usernameInput)
            .clear()
            .type(usuario)
    }

    digitarSenha(senha: string){
        cy.get(elements.passwordInput)
            .clear()
            .type(senha)
    }

    clicarBtnLogin(){
        cy.get(elements.loginBtn)
            .click()
    }

    verificarLoginRealizado(){
        cy.get(elements.tituloHomePage).should('have.text', 'Products')
    }

    verificarMensagemErroLogin(texto: string){
        cy.get(elements.tituloErroLoginSemSucesso).should('have.text', texto)
    }

}

export default new LoginPage();