import faker from "faker";

const cartText = `<div>You have ${faker.datatype.number(20)} item(s) in your cart`;

document.querySelector('#my-cart').innerHTML = cartText;

