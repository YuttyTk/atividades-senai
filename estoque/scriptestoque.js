// Obtém os elementos do DOM pelo ID


const formCadastro = document.getElementById("form-cadastro");
const tabela = document.getElementById("tabela-estoque");
const btnVerEstoque = document.getElementById("btn-ver-estoque");


// O DOM (Document Object Model) é como uma árvore de elementos que representa uma página da web.
//  Cada elemento da página é como um galho dessa árvore, e você pode acessar e 
//  modificar esses elementos com JavaScript para fazer coisas como adicionar ou remover conteúdo,
//   mudar o estilo da página e responder a eventos do usuário.
//    É como se você tivesse uma ferramenta para mexer na estrutura de uma página da web, 
//    o que permite que você faça coisas legais e interativas na internet.
// getElementById do objeto document para obter referências a elementos específicos 
// const porque seus valores não serão alterados após a atribuição inicial. 


// Cria um array vazio para armazenar os itens do estoque
let estoque = [];

// Adiciona um event listener para o formulário de cadastro quando for enviado
formCadastro.addEventListener("submit", function (event) {
    // Previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // O método addEventListener() é usado para registrar uma função que será executada sempre que esse evento ocorrer.
    // event.preventDefault();, é usada para impedir o comportamento padrão do formulário de HTML,
    //  que é recarregar a página quando o formulário é submetido. Isso é feito porque, na maioria dos casos,
    //   quando um formulário é submetido, o objetivo é enviar os dados para o servidor e realizar alguma ação sem precisar
    //    recarregar a página. A função preventDefault() é usada para impedir que a página seja recarregada, permitindo que o 
    //    JavaScript continue executando outras ações com os dados do formulário.


    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const dataEntrada = document.getElementById("data-entrada").value;

    // Nesse trecho de código, estão sendo obtidos os valores dos elementos de formulário HTML 
    // com os IDs "nome", "preco", "quantidade" e "data-entrada".
    // Cada uma dessas linhas usa o método document.getElementById() 
    // para acessar o elemento HTML correspondente e, em seguida,
    //  o atributo value é usado para obter o valor atualmente inserido nesse campo de formulário.



    // Cria um objeto com as informações do item
    const item = { nome, preco, quantidade, dataEntrada };

    // Adiciona o item ao array de estoque
    estoque.push(item);
    alert("Item Adicionado!")

    // Limpa o formulário de cadastro
    formCadastro.reset();
});




// Adiciona um event listener para o botão de ver o estoque
btnVerEstoque.addEventListener("click", function () {
    // Verifica se o estoque está vazio
    if (estoque.length === 0) {
        alert("Não há itens no estoque.");
        return;
    }

    // estoque.length é uma expressão que retorna o número de elementos armazenados na variável estoque, que é uma Array.



    // Limpa o corpo da tabela
    tabela.querySelector("tbody").innerHTML = "";

    // querySelector é um método da interface do DOM em JavaScript que permite selecionar elementos HTML com base em um seletor CSS.
    // garantindo que apenas os dados mais recentes e corretos sejam exibidos na tabela.


// tr e a linha da tabela
    // Adiciona uma linha na tabela para cada item do estoque
    estoque.forEach(function (item) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.preco}</td>
      <td>${item.quantidade}</td>
      <td>${item.dataEntrada}</td>
      <td><button>Remover do estoque</button></td>
    `;

//criar novo elemtento no html creatElement
//<td> é uma tag HTML usada para definir uma célula em uma tabela HTML. A tag <td> é usada dentro da tag <tr>


        // Adiciona um event listener para o botão de remover o item do estoque
        tr.querySelector("button").addEventListener("click", function () {
            // Encontra o índice do item no array de estoque
            const index = estoque.indexOf(item);
            // Remove o item do array
            estoque.splice(index, 1);
            // Remove a linha correspondente da tabela
            tabela.removeChild(tr);
        });

        // removeChild(tr) é um método do objeto Node no DOM (Modelo de Objeto de Documento) 
        // que é usado para remover um nó filho específico de um elemento pai.
        // No contexto do código fornecido, tr é uma linha (<tr>) que foi criada dinamicamente e 
        //     adicionada como filho do elemento tbody da tabela. 
        

        // Adiciona a linha à tabela
        tabela.querySelector("tbody").appendChild(tr);
    });


    // appendChild(tr) é um método usado para adicionar um novo nó como 
    // filho de outro nó existente no DOM (Modelo de Objeto de Documento).



    // Mostra a tabela
    tabela.style.display = "table";
});



// tabela.style.display = "table" é um código que define a propriedade CSS display do elemento tabela como "table".
// A propriedade CSS display controla como um elemento HTML é exibido na página. O valor "table" define o elemento como uma tabela,
//  o que significa que ele será exibido como uma tabela no layout da página.