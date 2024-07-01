import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

//numeros.push(readlinesync.questionFloat("Digite um numero: "));

numeros.unshift(2.5, 3.6, 8);

for (let numero of numeros)
    console.log(numero);

console.log(numeros);

console.log(`\n A posicao do elemento 5 é: ${numeros.indexOf(5)}`)
console.log(`\n A posicao do elemento 51 é: ${numeros.indexOf(51)}`)
console.log(`\n A posicao do elemento 7 é: ${numeros.indexOf(7)}`)
console.log(`\n Existe no Array o elemento5? ${numeros.includes(5)}`)

// atualizacao de valor
numeros[numeros.indexOf(5)] = 10;

console.table(numeros);

numeros.splice(numeros.indexOf(10), 1);// essa opcao e para apagar o numero desejado da array

console.table(numeros);// mostrar a tabela 
