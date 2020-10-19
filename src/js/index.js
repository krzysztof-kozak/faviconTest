import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

let counter = document.querySelector(".hydrapp__counter");
const addGlass = document.querySelector(".button__addGlass");
const removeGlass = document.querySelector(".button__removeGlass");

let counterValue = "0";

addGlass.addEventListener("click", () => {
  counterValue++;
  counter.innerHTML = counterValue;
  console.log("???");
});

removeGlass.addEventListener("click", () => {
  if (counterValue >= 1) {
    counterValue--;
    counter.innerHTML = counterValue;
    console.log("!!!");
  } else {
    //do nothing;
  }
});

//Wartość szklanek przechowuj w localstorage pod kluczem z
// dzisiejszą datą. const key = new Date().toISOString().slice(0, 10)
