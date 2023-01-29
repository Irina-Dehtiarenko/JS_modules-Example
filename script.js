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

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from suplier`);
//   };

//   // zwracamy to co potrzebne jest globalnie wzakresie modula
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })(); //closures - funkcja zistałą wywołąna, ale wciąż mamy dostęp do zmiennych, utworzonych w jej środku, które ta funkcja zwróciła

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); //undefined - ponieważ jest w zakresie prywatnym

//////////////////////////////////////////////
// Commonjs modules(NODE.js)
// All of this not workin in our code and browser, just as example
// Export
// export.addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//       );
//     };

//     // Import
//     const {addToCart} = require('./shoppingCart')
////////////////////////////////////////

// a brief introduction to th commend line

// dir - pokazuje składnie foldera
// cd ..  - wyjść na folder wyżej
// cd zacząć pisać nazwę folderu i kliknąć TAB - przejdzie do wubranego foldera
// cd ../.. - folder 2 razy powyżej
// clear
// mkdir TEST - tworzy folder z nazwą TEST
// new-item index.js - tworzy file
// del index.js - usuwa file
// mv .\iryna.html ../  - przenosi file do ../ - rodzica
// rmdir TEST - usuwa pusty folder???

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// poniższy kod dziła za pomocą parcel(nie działa bez niego - patrz powyżej):

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 6,
    },
  ],
  user: {
    loggedIn: true,
  },
};

// cloning deep nested object
// js way:
const stateClone = Object.assign({}, state);
console.log(stateClone);
// state.user.loggedIn = false;
// console.log(stateClone); //zmieni także tutaj tę wartość

// lodash way
const stateDeepClone = cloneDeep(state); //ten clon zostanie bez zmian
state.user.loggedIn = false;
console.log(stateDeepClone);

// ///////////////////////////////////////
// bundling with PARCEL and npm scripts
//npm i parcel --save-dev

if (module.hot) {
  module.hot.accept();
} //this code only parcel can understand
// wszystkie zmiany w kodzie dodaj się do strony, bez jej przeładowywania

console.log(stateDeepClone);

// Also we can ads to package.jsom w object "scripts":{
// "start":"parcel index.html"
// }
// Next using it in our terminal:
// npm run start

class Person {
  #geering = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#geering}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

// ES6 features are still in our bundler code(in dist folder)
console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

// all of stuff, usually we useing it:
import 'core-js/stable';

// one of stuff - create a smaller file
// import 'core-js/stable/array/find'
// import 'core-js/stable/promise';

// Polifilling async function
import 'regenerator-runtime/runtime';
