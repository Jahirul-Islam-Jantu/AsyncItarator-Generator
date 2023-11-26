//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators


// generator
function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myGen = generator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());