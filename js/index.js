// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let unitPrice = Number(price.innerHTML);
  let unitQuantity = Number(quantity.value);

  let subtotal = unitPrice * unitQuantity;

  let subtotalNum = product.querySelector(".subtotal span");

  subtotalNum.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let productPrice = 0;

  allProducts.forEach((product) => {
    productPrice += updateSubtotal(product);
  });

  // // ITERATION 3
  let totalPriceRender = document.querySelector("#total-value span");
  totalPriceRender.innerHTML = productPrice;
  return productPrice;
}

// ITERATION 4 (BONUS)

window.addEventListener("load", () => {
  const removeBtn = document.querySelectorAll(".btn-remove");
  const allBtns = [...removeBtn];
  allBtns.forEach((oneBtn) => {
    oneBtn.addEventListener("click", removeProduct);
  });
});

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  let totalPrice = document.querySelector("#calculate");
  totalPrice.click();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
