
import { Queue } from "../interface/Queue";


const fila = new Queue<number>();

for(let i = 1; i <=10; i++){
    fila.enqueue(i)
}
console.log("\nexibir todos os elementos da fila: ");

fila.printQueue();

console.log("\nremover elementos: " + fila.dequeue());

fila.printQueue();
console.log("\nExibir o primeiro elemento  da fila: " + fila.peek());

console.log("\nexiste o elemento 4 da fila? " + fila.contains(4));

fila.clear();

console.log("\na fila esta vazia? " + fila.isEmpty());

//https://teams.microsoft.com/l/message/19:meeting_MDc5NTU0NzktYTI1Zi00ODI1LTk4MjAtOTU3ZjVlN2ZlODYy@thread.v2/1719923387345?context=%7B%22contextType%22%3A%22chat%22%7D