// Loops
function forInExemplo(obj) {
    console.log("obj:\n====");
    
    for (prop in obj)
        console.log(prop);

    console.log("\nobj[prop]:\n==========");

    for (prop in obj)
        console.log(obj[prop]);
}

const meuObjeto = {
    nome: "João",
    idade: 20,
    cidade: "Salvador"
};

forInExemplo(meuObjeto);