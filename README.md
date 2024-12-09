# Projeto de Automação

## Descrição

Este projeto de automação desenvolvido para testes end-to-end de uma aplicação, seguindo um curso ministrado na Indra Minsait. Utiliza **Cypress** para execução de testes e **Allure** para geração de relatórios. O objetivo é facilitar a execução e manutenção de testes automatizados, garantindo a qualidade da aplicação.

---

## Setup do Projeto

### Pré-requisitos

Certifique-se de que sua máquina possui os seguintes softwares instalados:

- **Node.js** (versão 16 ou superior)
- **NPM** ou **Yarn**
- **Git**

### Passo a passo para configurar o ambiente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/randradee/cypress-treinamento-minsait.git
   cd cypress-treinamento-minsait
   ```

2. Instale as dependências:

    ```bash
    npm install
    ```

---

## Rodando os testes e gerando o relatório

1. Execute os testes localmente:
   ```bash
   npm run cypress:chrome
   ```

2. Execute o script de geração do relatório:
   ```bash
   npm run report:allure
   ```

---

### Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests para melhorias ou correções. Sua colaboração é bem-vinda!

---

## Licença

Este projeto está sob a licença [MIT](LICENSE).