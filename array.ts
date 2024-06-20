const numberArray: Array<number> = [1, 2, 3, 4, 5];

const stringArray: string[] = ['a', 'b', 'c', 'd', 'e'];

console.log(numberArray[2]);

console.log(stringArray.length);

console.log("Array original: ", numberArray);

numberArray.push(6);

console.log("Array com novo elemento: ", numberArray);

numberArray.pop();
console.log("Array com o último elemento removido: ", numberArray);
