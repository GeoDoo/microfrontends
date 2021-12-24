import faker from "faker";

const products = Array.from("howdy")
  .map(() => `<div>${faker.commerce.productName()}</div>`)
  .join("");

document.getElementById("products").innerHTML = products;
