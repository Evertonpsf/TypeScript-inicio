import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

console.log("====Digite os numeros que voce deseja abaixo===\n")

//escopo do programa
numero1 = readlinesync.questionFloat("\nDigite o primeiro numero: ")
numero2 = readlinesync.questionFloat("\nDigite o segundo numero: ")
    console.log(`\nSoma: ${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
    console.log(`\nSubtracao: ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
    console.log(`\nMultiplicacao: ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);
    console.log(`\nDivisao: ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);

    let resultadoDivisao = dividir(numero1, numero2);

    if(resultadoDivisao){
        console.log(`\nDivisao: ${numero1} / ${numero2} ${resultadoDivisao}`)
    }else{
        console.log("\nNao existe divisao por zero!")
    }

    autor();
    
    //escopo da funcao
    function somar(numero1: number, numero2: number): number{
        return numero1 + numero2;
    }
    function subtrair(numero1: number, numero2: number): number{
        return numero1 - numero2;
    }
    function multiplicar(numero1: number, numero2: number): number{
        return numero1 * numero2;
    }
    function dividir(numero1: number, numero2: number): number|null{
       let divisao: number = numero1 / numero2;
      return(divisao !== Infinity ? divisao : null)// depois da interrogacao e o que faz quando a condicao for verdadeira e depoiis do : dois pontos e se a condicao for falsa
    
      //   if(divisao !== Infinity){
   //     return divisao;
   // }else{
   //     return null
   // } 


    }
    function autor(): void{
        console.log("\nFeito por Everton");
    }