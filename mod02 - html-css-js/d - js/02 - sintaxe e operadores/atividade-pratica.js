function compara(a, b) {

    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        console.log("Argumentos precisam ser numéricos.");
        return false;
    }

    firstNumber = parseInt(a);
    secondNumber = parseInt(b);
    
    soma = firstNumber + secondNumber;

    console.log("Os números " + firstNumber + " e " + secondNumber + (firstNumber === secondNumber ? " são" : " não são") +
        " iguais. Sua soma é " + soma + ", que é " + (soma > 10 ? "maior que" : "menor ou igual a") +
        " 10 e " + (soma > 20 ? "maior que" : "menor ou igual a") + " 20.");

    return true;

}

compara(3, 4);
compara(6, 6);
compara(6, 4);
compara(8, 7);
compara(10, 10);
compara(12, 16);
compara(2, '2');
compara(4, 'soma');