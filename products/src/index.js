import faker from "faker";

const products = Array.from("howdy")
  .map(() => `<div>${faker.commerce.productName()}</div>`)
  .toString();

console.log(products);
