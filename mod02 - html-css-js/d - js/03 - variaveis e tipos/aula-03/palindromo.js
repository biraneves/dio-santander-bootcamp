// Verificação de palavra palíndromo, usando laço.
function verificaPalindromoPalavra(palavra) {

    if (!palavra) return;

    let tamanhoPalavra = palavra.length;
    let maiorIndice = tamanhoPalavra - 1;
    let palavraReversa = [tamanhoPalavra];

    for (let i = maiorIndice; i >= 0; i--) {

        palavraReversa[maiorIndice - i] = palavra[i];

    }

    return palavra === palavraReversa.toString().replaceAll(",", "");

}

// Verificação de frase palíndromo, usando laço
function verificaPalindromoFrase(frase) {

    if (!frase) return;

    let fraseLimpa = frase.replaceAll(" ", "");
    let tamanhoFraseLimpa = fraseLimpa.length;
    let maiorIndice = tamanhoFraseLimpa - 1;
    let fraseReversa = [tamanhoFraseLimpa];

    for (let i = maiorIndice; i >= 0; i--) {

        fraseReversa[maiorIndice - i] = fraseLimpa[i];

    }

    return fraseLimpa === fraseReversa.toString().replaceAll(",", "");

}

// Função genérica, usando métodos de arrays
function verificaPalindromo(texto) {

    if (!texto) return;

    let textoLimpo = texto.replaceAll(" ", "");

    return textoLimpo === textoLimpo.split("").reverse().join("");

}

console.log(`ave: ${verificaPalindromoPalavra("ave")}`);
console.log(`omo: ${verificaPalindromoPalavra("omo")}`);
console.log(`uma frase qualquer: ${verificaPalindromoFrase("uma frase qualquer")}`);
console.log(`roma me tem amor: ${verificaPalindromoFrase("roma me tem amor")}`);
console.log(`eva: ${verificaPalindromo("eva")}`);
console.log(`ama: ${verificaPalindromo("ama")}`);
console.log(`outra frase qualquer: ${verificaPalindromo("outra frase qualquer")}`);
console.log(`a grama e amarga: ${verificaPalindromo("a grama e amarga")}`);