// Função autoinvocável - IIFE (immediately invoked function expression)
const resultado = (
    function() {
        let name = "Digital Innovation One";
        return name;
    }
)();

console.log(resultado);

const soma = (
    function(a, b) {
        return a + b;
    }
)(2, 3);

console.log(soma);