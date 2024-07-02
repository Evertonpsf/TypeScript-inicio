import readlinesync = require("readline-sync");

const numeroList: Set<number> = new Set<number>();


for (let i = 0; i < 10; i++){
    let numero = readlinesync.questionInt(`!Digite 10 numeros inteiro abaixo!\n ${i + 1}º numeros inteiros: `);
    numeroList.add(numero)
    }
console.log("\nlista dados do set: ")
numeroList.forEach(numero => console.log(numero));

