let message = document.getElementById('message'); /* Buscando a tag com o id "message" */

        let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let nipes = ["♠", "♣", "♥", "♦"];
        let card = [];

        function createCard() { /* Função que cria a carta */
            let face = faces[Math.floor(Math.random() * faces.length)]; /* Gerando uma face aleatória */
            let nipe = nipes[Math.floor(Math.random() * nipes.length)]; /* Gerando um naipe aleatório */

            card = [face + nipe]; /* Atribuindo a face e naipe aleatórios para o array vazio card */

            message.innerHTML = (card); /* Imprimindo o valor da carta */

            /* message.innerHTML=(face + nipe); */ /* teste: imprimindo nipe e face aleatórios */

            /* message.innerHTML=(faces[3] + nipes[0]); */ /* teste: imprimindo valores do array */
        }