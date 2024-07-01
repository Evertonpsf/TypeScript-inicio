import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

console.log("====Digite os numeros que voce deseja abaixo===\n")

numero1 = readlinesync.questionFloat("\nDigite o primeiro numero: ")
numero2 = readlinesync.questionFloat("\nDigite o segundo numero: ")
    console.log(`\nSoma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
    console.log(`\nSubtracao: ${numero1} - ${numero2} = ${numero1 - numero2}`);
    console.log(`\nMultiplicacao: ${numero1} * ${numero2} = ${numero1 * numero2}`);
    console.log(`\nDivisao: ${numero1} / ${numero2} = ${numero1 / numero2}`);
