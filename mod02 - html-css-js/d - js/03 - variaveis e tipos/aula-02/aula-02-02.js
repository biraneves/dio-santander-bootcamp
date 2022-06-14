let array = [];

array.push(3);
array.push(2);

console.log(array);

array.pop();
console.log(array);

array.push(8);
array.push(0);
console.log(array);

array.shift();
console.log(array);

array.unshift(7);
console.log(array);

array.map((x) => console.log(x));
console.log(array.every((x) => x === 8));
console.log(array.some((x) => x === 8));