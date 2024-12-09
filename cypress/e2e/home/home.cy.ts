import detalhamentoPage from "../../support/pages/detalhamentoPage";
import homePage from "../../support/pages/homePage";

describe('Home Page', () => {
    beforeEach('', () => {
        cy.fixture('loginData.json').then((loginData) => {
            cy.login(loginData.usuarioPadrao, loginData.senha);
        });
    })

    it('Adicionar produto ao carrinho com sucesso', () => {
        cy.fixture('homeData.json').then((homeData) => {
            homePage.adicionarProdutoNoCarrinho(homeData.nomeProduto1);
        })
    })

    it('Acessar carrinho', () => {
        homePage.acessarCarrinho();
    })

    it('Acessar detalhamento do produto', () => {
        cy.fixture('homeData.json').then((homeData) => {
            homePage.acessarDetalhamento(homeData.nomeProduto1)
            detalhamentoPage.validarNomeDoProduto(homeData.nomeProduto1)
            detalhamentoPage.validarDescricaoDoProduto(homeData.descricaoProduto1)
        })
    })

})