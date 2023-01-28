// Importing module

// First way
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// Second Way:
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// third way:
// we can do it: but don't do it
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);
// console.log(price, tq);

// best way:
import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 6);
add('apples', 18);

console.log(cart);
