import faker from "faker";

const products = Array.from("howdy")
  .map(() => `<div>${faker.commerce.productName()}</div>`)
  .join("");

  document.querySelector('#my-products').innerHTML = products;
