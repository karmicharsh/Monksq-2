import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;

  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + (productPrice * curElem.quantity); // Calculate total price based on quantity
  }, initialValue);

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.textContent = `₹${totalProductPrice + 50}`;

  // Returning cart items with necessary details for Stripe
  return localCartProducts.map(product => ({
    id: product.id,
    name: product.name,
    quantity: product.quantity,
    price: product.price
  }));
};
