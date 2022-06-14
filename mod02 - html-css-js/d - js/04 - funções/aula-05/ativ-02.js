function calculaIdade(anos) {

    if (!anos) return;

    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}

const bira = {
    nome: 'Bira',
    idade: 49
};

const pam = {
    nome: 'Pâm',
    idade: 34
};

console.log(calculaIdade.call(bira, 10));
console.log(calculaIdade.call(pam, 10));