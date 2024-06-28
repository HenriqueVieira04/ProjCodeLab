# F I N A N C E R

Bem-vindo ao **F I N A N C E R**, uma ferramenta criada para um projeto final de um curso ministrado pelo grupo de extensao Codelabs que eh formado por alunos da USP, este projeto foi criado por dois alunos do curso de Bacharelado em Ciencias da Computacao: [Henrique Vieira](https://github.com/HenriqueVieira04) e [Keren L Gomes](https://github.com/HenriqueVieira04).

## Descricao

**F I N A N C E R** eh uma aplicacao web que permite voce acompanhar suas entradas e saidas financeiras, visualizar a distribuicao dos seus gastos e acompanhar a progressao do seu saldo mes a mes. Tornando mais facil a visualizacao e controle dos seus gastos

## Comecando

### Passo a Passo para o Funcionamento

1. **Baixe o Repositorio**: Primeiro, voce deve fazer o download do repositorio. Voce pode fazer isso de duas formas:

   - Clonar o repositorio usando Git:
     ```sh
     git clone https://github.com/seu-usuario/seu-repositorio.git
     ```
   - Ou simplesmente baixar o ZIP do projeto direto do GitHub.

2. **Abra o Projeto**:
   - Descompacte o arquivo ZIP (se voce fez o download desta forma).
   - Navegue ateh a pasta do projeto e abra o arquivo `index.html` em seu navegador de internet preferido.

### Edicao do Projeto

Para fazer mudancas ou personalizar voce vai precisar de um editor de codigo. Algumas sugestoes gratuitas sao o [VS Code](https://code.visualstudio.com/) e o [Sublime Text](https://www.sublimetext.com/).

## Estrutura do Projeto

Aqui esta um resumo do que voce vai encontrar no projeto:

```plaintext
/
├── index.html              # Pagina principal
├── moviment.html           # Pagina de movimentacoes
├── stilo.css               # Estilos para a pagina principal
├── moviment.css            # Estilos para a pagina de movimentacoes
├── code.js                 # Logica JavaScript para a pagina principal
├── code2.js                # Logica JavaScript para a pagina de movimentacoes
└── README.md               # Esse arquivo que voce esta lendo
```

### `index.html`

Esta eh a pagina principal. Aqui voce vai encontrar:

- Um menu lateral esquerdo com opcoes para navegar.
- Uma secao central com graficos de divisao de gastos e progressao mensal.
- Um menu lateral direito com informacoes de saldo e previsao mensal, e controles para atualizar esses valores.

### `moviment.html`

Aqui eh onde as movimentacoes acontecem:

- Um menu lateral esquerdo com as mesmas opcoes de navegacao.
- A secao central com campos para registrar entradas e saidas financeiras, e uma lista de movimentacoes.

## Funcionalidades

### Divisao de Gastos

- Insira valores para diferentes categorias de gastos (alimentacao, lazer, moradia, transporte, compras, outro).
- Um grafico de pizza atualiza automaticamente com os valores inseridos.

### Progressao Mensal

- Um grafico de barras mostra a progressao mensal do seu saldo.
- Valores atualizados em tempo real baseados nos dados armazenados no `localStorage`.

### Saldo e Previsao Mensal

- Atualize seu saldo e previsao de gastos atravehs de inputs na interface.
- Veja os valores refletidos em tempo real nos graficos e textos.

### Movimentacoes

- Registre entradas e saidas financeiras.
- Liste as movimentacoes, que sao armazenadas no `localStorage`.

## Personalizacao

Para personalizar, basta:

- Abrir os arquivos CSS para mudar as cores, fontes e estilos.
- Abrir os arquivos JS para adicionar novas funcionalidades ou modificar as existentes.
- Editar o HTML para mudar a estrutura das paginas.

## Tecnologias Utilizadas

- HTML5: Estrutura basica do projeto.
- CSS3: Estilos, cores e layout.
- JavaScript: Logica do projeto.
- [Chart.js](https://www.chartjs.org/): Para os graficos.
- [Font Awesome](https://fontawesome.com/): Para os icones.

## Contribuicao

Achou um bug? Tem uma ideia bacana para uma nova funcionalidade?
Contribuicoes sao mais do que bem-vindas!
