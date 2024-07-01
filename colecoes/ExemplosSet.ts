const frutas: Set<string> = new Set<string>();


frutas.add("kiwi");
frutas.add("manga")
frutas.add("caqui")
frutas.add("caqui")

console.table(frutas);

console.log(`\nA fruta Caqui existe? ${frutas.has("caqui")}`);

frutas.delete("caqui");

console.table(frutas);
