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

// top-level await - allowed only in modules
// example1:
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// example2:
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// // const lastPost = getLastPost();
// // not wery clean
// // lastPost.then(last => console.log(last));
// // console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);
///////////////////////////////////////////////////////////////
// Module patern - to w jaki sposób były tworzone module, zanim pojawiły się prawdzie module in ES6

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from suplier`);
  };

  // zwracamy to co potrzebne jest globalnie wzakresie modula
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})(); //closures - funkcja zistałą wywołąna, ale wciąż mamy dostęp do zmiennych, utworzonych w jej środku, które ta funkcja zwróciła

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined - ponieważ jest w zakresie prywatnym
