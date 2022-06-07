const elemContador = document.getElementById('valor-atual');
const botaoAdicionar = document.getElementById('adicionar');
const botaoSubtrair = document.getElementById('subtrair');
const campoValorMinimo = document.getElementById('valor-minimo');
const campoValorMaximo = document.getElementById('valor-maximo');

var valorAtual = 0;
var valorMinimo = -10;
var valorMaximo = 10;

function verificaLimites() {
    valorMinimo = campoValorMinimo.value;
    valorMaximo = campoValorMaximo.value;

    return valorMinimo < valorMaximo;
}

function erroLimites() {
    alert('O valor mínimo precisa ser menor do que o valor máximo!');
}

function atualizaContador() {
    elemContador.innerText = valorAtual;
    elemContador.style.color = '#555';
    
    if (valorAtual < 0) {
        elemContador.style.color = '#f00';
    }
}

botaoAdicionar.addEventListener('click', () => {
    
    if (verificaLimites()) {
        if (valorAtual < valorMaximo) {
            valorAtual++;
            atualizaContador();
        }
    } else {
        erroLimites();
    }

});

botaoSubtrair.addEventListener('click', () => {

    if (verificaLimites()) {
        if (valorAtual > valorMinimo) {
            valorAtual--;
            atualizaContador();
        }
    } else {
        erroLimites();
    }

});