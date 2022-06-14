// Manipulando o valor do this
// Call
const pessoa = {
    nome: "Miguel"
};

const animal = {
    nome: "Murphy"
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);
getSomething.call(animal);

const myObj = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

// Apply

const segundoAnimal = {
    nome: "Godi"
}

getSomething.apply(pessoa);
getSomething.apply(segundoAnimal);

soma.apply(myObj, [1, 5]);

// Bind
const retornaNomes = function () {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: "Bruno"});

console.log(bruno());