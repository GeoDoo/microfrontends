import faker from "faker";

const mount = ($el) => {
  const products = Array.from("howdy")
    .map(() => `<div>${faker.commerce.productName()}</div>`)
    .join("");

  $el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const $el = document.getElementById("dev-products");

  if ($el) mount($el);
}

export { mount };
