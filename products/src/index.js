import faker from "faker";

const products = `<div>${faker.commerce.productName()}</div><div>${faker.commerce.productName()}</div><div>${faker.commerce.productName()}</div>`;

console.log(products);
