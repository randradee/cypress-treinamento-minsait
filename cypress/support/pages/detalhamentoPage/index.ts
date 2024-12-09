const elements = require('./elements').ELEMENTS

class DetalhamentoPage {
    validarNomeDoProduto(nome: string){
        cy.get(elements.tituloProduto).should('have.text', nome)
    }

    validarDescricaoDoProduto(descricao: string){
        cy.get(elements.descricaoProduto).should('have.text', descricao) 
    }
}

export default new DetalhamentoPage();