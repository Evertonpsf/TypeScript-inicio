import { Queue } from "../interface/Queue";
const fila = new Queue<string>();

let leia = require("readline-sync");
let continua = true
let novoCliente: string;
let codigo: number;

console.log("\n************************************************************\n");
console.log("1 - Adicionar Cliente na Fila ");
console.log("2 - Listar todos os Clientes ");
console.log("3 - Retirar Clientes da Fila ");
console.log("0 - Sair!  ");
console.log("\n************************************************************");
console.log("\nEntre com a opcao desejada: ");


while (continua) {


    codigo = leia.questionInt("\nDigite uma opcao: ");

    switch (codigo) {
        case 1:
            console.log("\nAdicione cliente na fila: ");
            novoCliente = leia.question("\nDigite seu nome: ");
            fila.enqueue(novoCliente);
            console.log("\nCliente adicionado!")
            break;
        case 2:
            console.log("\nExibir a lista de cliente: ");
            fila.printQueue();
            break;
        case 3:
            console.log("\nRemover elementos: " + fila.dequeue());
            break;
        case 0:
            continua = false
            console.log("\Programa Finalizado! ");
            break;
        default: console.log("Opcao invalida, verifique as opcoes corretas no menu anterior!");
        
    }
}