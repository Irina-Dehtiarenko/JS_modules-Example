// Exporting module
console.log('Exporting module');

// // Blocking code - this code will block the code in other module, where it is exported
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

// first way of exports(named)
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 2337;
const totalQuantity = 23;

// second way of exports(named)
export { totalPrice, totalQuantity as tq };

// third way of exports - default exports:
// export 1 thing from module

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
