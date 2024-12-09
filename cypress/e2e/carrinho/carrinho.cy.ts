import carrinhoPage from "../../support/pages/carrinhoPage";
import homePage from "../../support/pages/homePage";

describe('Carrinho', () => {
    beforeEach('', () => {
        cy.fixture('loginData.json').then((loginData) => {
            cy.login(loginData.usuarioPadrao, loginData.senha)
        })

        cy.fixture('carrinhoData.json').then((carrinhoData) => {
            homePage.adicionarProdutoNoCarrinho(carrinhoData.nomeProduto1)
            homePage.adicionarProdutoNoCarrinho(carrinhoData.nomeProduto2)
            homePage.adicionarProdutoNoCarrinho(carrinhoData.nomeProduto3)
            homePage.adicionarProdutoNoCarrinho(carrinhoData.nomeProduto4)
        })

        homePage.acessarCarrinho();
    })

    it('Remover todos os itens do carrinho', () => {
        cy.fixture('carrinhoData.json').then((carrinhoData) => {
            carrinhoPage.removerItemDoCarrinho(carrinhoData.nomeProduto1)
            carrinhoPage.removerItemDoCarrinho(carrinhoData.nomeProduto2)
            carrinhoPage.removerItemDoCarrinho(carrinhoData.nomeProduto3)
            carrinhoPage.removerItemDoCarrinho(carrinhoData.nomeProduto4)
        })
    })
})