const text = "The price of the product is $550.99 and the quantity is 10";
const numbers = text.match(/\d+/g).map(Number);

console.log(numbers);