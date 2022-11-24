import { loadHeaderFooter } from "./utils";
import ShoppingCart from './shoppingCart.js';

loadHeaderFooter();

const cart = new ShoppingCart('so-cart', document.querySelector('.product-list'));
cart.init();




