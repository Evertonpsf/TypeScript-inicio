import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

console.log("\n========Informe somente 5 cores de sua preferencia========\n")
for (let i = 0; i < 5; i++) {
    cores.push(readlinesync.question('\nDigite a cor desejada (max 5 cores):'))

}
console.log("\nListar todas as cores. \n")
for (let cor of cores) {
    console.log(`${cor} `)
}
console.log("\nOrdenar as cores.\n")

for (let cor of cores.sort()) {
    console.log(`${cor} `)
}


