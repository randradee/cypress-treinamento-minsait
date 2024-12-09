const elements = require('./elements').ELEMENTS

class CarrinhoPage {
    removerItemDoCarrinho(nome: string){
        cy.get(elements.nomeProduto).contains(nome)
            .parent()
            .parent()
            .parent()
            .find('button').should('have.text', 'Remove')
            .click()
    }
}

export default new CarrinhoPage();