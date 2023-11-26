//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

// generator
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const myGen = generator();

// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());

// function* range(start = 0, stop = 100, step = 5) {
//   for (let i = start; i <= stop; i += step) {
//     yield i;
//   }
// }
// const rangeof = range();
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());
// console.log(rangeof.next());

// for (let v of range()) {
//   console.log(v);
// }

function* generatId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const userId = generatId();
const productId = generatId();

console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);
console.log("User Id ", userId.next().value);

console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
console.log("Product Id ", productId.next().value);
