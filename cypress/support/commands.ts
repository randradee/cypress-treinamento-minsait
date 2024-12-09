/// <reference types="cypress" />

import loginPage from "./pages/loginPage";

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Comando para realizar login.
         * @param usuario - Usuário
         * @param senha - Senha
         * @example cy.login('test@example.com', 'test123')
         */
        login(usuario: string, senha: string): Chainable<void>;
      }
    }
}

Cypress.Commands.add('login', (usuario: string, senha: string) => {
    cy.visit('/')
    loginPage.verificarTituloLoginPage();
    
    loginPage.digitarUsuario(usuario);
    loginPage.digitarSenha(senha);
    loginPage.clicarBtnLogin();
    loginPage.verificarLoginRealizado();
    
})
  
export {};