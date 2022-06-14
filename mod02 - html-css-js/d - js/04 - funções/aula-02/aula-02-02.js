// Objeto arguments
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i];
    }

    return max;
}

function showArgs() {
    return arguments;
}

console.log(findMax(1, 2, 3, 6, 90, 1));
console.log(showArgs());
console.log(showArgs(1, 2, [2, 3, 4], 'string'));