import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */


const counter = document.querySelector(".hydrapp__counter");
const addGlass = document.querySelector(".button__addGlass");
const removeGlass = document.querySelector(".button__removeGlass");
const key = new Date().toLocaleString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);
let counterValue = 0;



if (localStorageValue) {
  counterValue = localStorageValue;
  counter.innerHTML = counterValue;
} else {
  localStorage.setItem(key, 0);
}



addGlass.addEventListener("click", () =>{
  counterValue++;
  counter.innerHTML = counterValue;
  localStorage.setItem(key, counterValue);
})

removeGlass.addEventListener("click", () =>{
  if(counterValue>0) {
  counterValue--;
  counter.innerHTML = counterValue;
  localStorage.setItem(key, counterValue);
}
})
