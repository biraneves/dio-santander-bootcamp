function alunosAprovados(array, mediaFinal = 7.0) {

    if (!array || array.length === 0) return;

    let alunosAprovados = array.filter(({_, nota}) => nota >= mediaFinal);

    return alunosAprovados;

}

const alunos = [
    { nome: "João", nota: 5.0 },
    { nome: "Maria", nota: 8.5 },
    { nome: "Alice", nota: 3.5 },
    { nome: "Chapeleiro", nota: 9.0 }
];

console.log(alunosAprovados(alunos));
console.log(alunosAprovados(alunos, 5.0));