import { Stack } from "../interface/Stack";

const pilha = new Stack<string>();

let leia = require("readline-sync");
let continua = true
let novoLivro: string;
let codigo: number;

console.log("\n************************************************************\n");
console.log("1 - Adicionar Livro na Planilha ");
console.log("2 - Listar todos os Livros ");
console.log("3 - Retirar Livro da Pilha ");
console.log("0 - Sair!  ");
console.log("\n************************************************************");
console.log("\nEntre com a opcao desejada: ");


while (continua) {


    codigo = leia.questionInt("\nDigite uma opcao: ");

    switch (codigo) {
        case 1:
            novoLivro = leia.question("\nDigite nome: ");
            pilha.push(novoLivro);
            console.log("\nPilha:")
            pilha.printStack()
            console.log("\nLivro adicionado!")
            break;
        case 2:
            console.log("\nLista de Livros na Pilha: ");
            pilha.printStack();
            break;
        case 3:
            pilha.pop()
            pilha.printStack()
            console.log("\nUm Livro foi retirado da pilha!");
            break;
        case 0:
            continua = false
            console.log("\nPrograma Finalizado! ");
            break;
        default: console.log("Opcao invalida, verifique as opcoes corretas no menu anterior!");

    }
}