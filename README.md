# PROJETO-Cat-logo-de-Produtos-React-Vite-
Neste projeto, você aplicará conhecimentos sobre React para criar uma aplicação funcional e interativa. O projeto deve incluir componentes reutilizáveis, gerenciamento de estado e uma estrutura clara de pastas.

PROJETO – Catálogo de Produtos (React + Vite)

Hoje você irá desenvolver seu primeiro mini-projeto real em React, utilizando
apenas os conceitos que aprendemos em sala:
✓ componentes.
✓ props.
✓ useState.
✓ manipulação de eventos.
✓ organização básica.

Enunciado:
O objetivo é criar uma aplicação React chamada Catálogo de Produtos,
semelhante aos catálogos de lojas como Amazon, Shopee e Americanas, onde o
usuário pode visualizar uma lista de itens e selecionar um produto para ver seus
detalhes.

Você não precisa fazer carrinho, filtros avançados ou banco de dados.
O foco é praticar React de forma real, porém simples.

src/📁
│
├── App.jsx
├── main.jsx
├── App.css
└── components/📁
├── ProdutoItem.jsx
└── ProdutoLista.jsx

Sua aplicação deve conter:
1. Uma lista de produtos
Cada produto deve ter:
• nome
• preço
• imagem
Esses dados podem estar em um array dentro do App.jsx.

2. Um componente para listar os produtos
Crie um componente chamado ProdutoLista, responsável por receber a lista de
produtos via props e renderizá-los na tela.

3. Um componente para exibir cada produto individualmente
Crie também um componente ProdutoItem, que deve:
• exibir a imagem, o nome e o preço
• possuir um botão Selecionar
• enviar o produto clicado de volta para o App usando uma função recebida por
props
4. Um estado no App para armazenar o produto selecionado
Use useState para guardar qual produto o usuário escolheu.
Quando o botão “Selecionar” for clicado, atualize esse estado.

5. Um painel exibindo o produto selecionado
Abaixo da lista deve aparecer (somente se o usuário selecionou algo):
Produto Selecionado:
Nome: _____
Preço: _____

6. Estilização simples (CSS)
Você deve:
• estilizar os cards dos produtos
• deixar as imagens proporcionais
• deixar o botão visível e funcional
• criar um painel estilizado para o produto selecionado
Você pode fazer no App.css ou separar em outro arquivo.

UP BY PEDRO AMARAL
