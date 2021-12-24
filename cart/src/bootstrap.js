import faker from "faker";

const mount = ($el) => {
  const cartText = `<div>You have ${faker.datatype.number(
    20
  )} item(s) in your cart`;

  $el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const $el = document.getElementById("dev-cart");

  if ($el) mount($el);
}

export { mount };
