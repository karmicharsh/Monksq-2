import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue"; 

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  // console.log(quantity,price);
  price = price.replace("₹", "");
  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }
    if (existingProd) {
      // alert("bhai duplicate hai");
      return false;
    }
    price = Number(price*quantity);
    quantity = Number(quantity);
  
 

  ///let updateCart = {id, quantity, price};
  arrLocalStorageProduct.push({id, quantity, price});
  localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

  // update the cart button value
  updateCartValue(arrLocalStorageProduct);





}