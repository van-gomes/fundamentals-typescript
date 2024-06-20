const numberArray: Array<number> = [1, 2, 3, 4, 5];

const stringArray: string[] = ['a', 'b', 'c', 'd', 'e'];

console.log(numberArray[2]);

console.log(stringArray.length);

console.log("Array original: ", numberArray);

numberArray.push(6);

console.log("Array com novo elemento: ", numberArray);

numberArray.pop();
console.log("Array com o último elemento removido: ", numberArray);

/*find compara elemento por elemento, quando
encontrar o que atende a condição, devolve o resultado */
const buscaNumero = numberArray.find(num => num === 4);
console.log(buscaNumero);

stringArray.forEach(str => console.log(str));

numberArray.forEach(num => {
    if(num > 2 && num % 2 === 0){
        console.log(num * 2);
    }
});

numberArray.map(num => console.log(num));

numberArray.map(num => {
    if(num > 2){
        console.log(num * 2);
    }
});