function substituiPares(array) {

    if (!array || !array.length) return -1;

    novoArray = array.map((item) => (item !== 0 && item % 2 === 0) ? item = 0 : item);

    return novoArray;

}

let array = [1, 2, 3, 0, 5, 6, 8, 10, 9];

console.log(array);
console.log(substituiPares(array));