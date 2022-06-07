const percDesconto = 0.2;
var preco = 480.00;

function calculaDesconto(preco, percDesconto) {
    var desconto = preco * percDesconto;
    return preco - desconto;
}

console.log(calculaDesconto(preco, percDesconto));
