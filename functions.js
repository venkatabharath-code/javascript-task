// Example 1: Function declaration
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Alice');

// Example 2: Function expression
const add = function(a, b) {
  return a + b;
};
console.log('Sum: ' + add(10, 20));

// Example 3: Arrow function
const multiply = (x, y) => {
  return x * y;
};
console.log('Product: ' + multiply(5, 4));
