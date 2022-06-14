let nome = "João";
let sobrenome = "Pedro";

console.log(`nome: ${typeof(nome)}`);
console.log(`sobrenome: ${typeof(sobrenome)}`);

let concatenado = nome.concat(sobrenome);

console.log(`nome: ${typeof(nome)}`);
console.log(`sobrenome: ${typeof(sobrenome)}`);
console.log(`concatenado: ${typeof(concatenado)}`);

let exemplo = new String("blablabla");
console.log(`exemplo: ${typeof(exemplo)}`);

console.log(concatenado);
console.log(concatenado[2]);
console.log(concatenado.length)

let frase = "Olá, tudo bem?";

console.log(frase.split(" "));
console.log(frase.includes("tudo"));
console.log(frase.startsWith("O"));
console.log(frase.replace(", t", "! T"));