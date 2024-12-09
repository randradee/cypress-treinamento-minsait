const elements = require('./elements').ELEMENTS
const sharedElements = require('../shared/elements').ELEMENTS

class HomePage {
    adicionarProdutoNoCarrinho(nomeProduto: string){
        cy.get(elements.tituloProduto).contains(nomeProduto)
            .parent()
            .parent()
            .parent()
            .find('button')
            .should('have.text', 'Add to cart')
            .click()

        cy.get(elements.tituloProduto).contains(nomeProduto)
            .parent()
            .parent()
            .parent()
            .find('button').should('have.text', 'Remove')
    }

    removerProdutoDoCarrinho(nomeProduto: string){
        cy.get(elements.tituloProduto).contains(nomeProduto)
            .parent()
            .parent()
            .parent()
            .find('button').should('have.text', 'Remove')
            .click()
    }

    acessarCarrinho(){
        cy.get(elements.linkCarrinho)
            .click()

        cy.get(sharedElements.tituloPaginaAtual)
            .should('have.text', 'Your Cart')
    }

    acessarDetalhamento(nomeProduto: string){
        cy.get(elements.tituloProduto).contains(nomeProduto)
            .click()
    }
}


export default new HomePage();