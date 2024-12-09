import loginPage from "../../support/pages/loginPage"

describe('Login', () => {
    beforeEach('', () => {
        cy.visit('/');
        loginPage.verificarTituloLoginPage();
    })

    it('Realizar login com sucesso', () => {
        cy.fixture('loginData.json').then((loginData) => {
            loginPage.digitarUsuario(loginData.usuarioPadrao);
            loginPage.digitarSenha(loginData.senha);
            loginPage.clicarBtnLogin();
            loginPage.verificarLoginRealizado();
        });
    })

    it.only('Realizar login sem sucesso', () => {
        cy.fixture('loginData.json').then((loginData) => {
            loginPage.digitarUsuario(loginData.usuarioPadrao);
            loginPage.digitarSenha(loginData.senhaIncorreta);
            loginPage.clicarBtnLogin();
            loginPage.verificarMensagemErroLogin(loginData.textoErroLoginSemSucesso);
        });
    })
})