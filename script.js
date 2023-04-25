// Obter os elementos do DOM pelos ID's

const formCadastro = document.getElementById("form-cadastro");
const tabela = document.getElementById("tabela-estoque");
const btnVerEstoque = document.getElementById("btn-ver-estoque");

let estoque = [];

formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const dataEntrada = document.getElementById("data-entrada").value;

    const item = { nome, preco, quantidade, dataEntrada };
    // Cria objeto unificando todos os valores a um item

    estoque.push(item);
    alert("Item Adicionado");

    formCadastro.reset();

});

btnVerEstoque.addEventListener("click", function () {
    // Verifica se oestoque está vazio

    if (estoque.length === 0) {
        alert("Não há itens no estoque");
        return;
    }
});

tabela.querySelector("tbody").innerHTML = "";
// Seleciona campo da tabela

estoque.forEach(function(item){
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.preco}</td>
    <td>${item.quantidade}</td>
    <td>${item.dataEntrada}</td>
    <td><button>Remover do Estoque</button></td>
    `;
// Criou um elemento novo dentro do html atraves da função createElement

tr.querySelector("button").addEventListener("click", function() {
    // Enontra o botão remover item

    const index = estoque.indexOf(item);
    // Encontra o item (objeto) dentro do array

    estoque.splice(index, 1);
    // Remover o item (objeto) da tabela

    tabela.removeChild(tr);
    // Remove a linha em branco do objeto removido
});

tabela.querySelector("tbody").apeendChild(tr);
// Adiciona uma linha a tabela

tabela.style.display = "table";

});