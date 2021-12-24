import { mount as productsMount } from "products/bootstrap";
import { mount as cartMount } from "cart/bootstrap";

const $products = document.getElementById("my-products");
const $cart = document.getElementById("my-cart");

productsMount($products);
cartMount($cart);
