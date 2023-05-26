"use strict";

const topField = document.querySelector(".calculator__output--top");
const bottomField = document.querySelector(".calculator__output--bottom");
const calcInput = document.querySelector(".calculator__input");
let operator;
let x = bottomField.innerText || 0;
let y = 0;

function calculator(e) {
  console.log(e.key)
  

  if(e.key >= 0 && e.key <= 9){
    x += e.key;
    bottomField.innerText += e.key;
  }

  if(e.key === "+") {
    x = 0;
    y = Number(bottomField.innerText);
    operator = e.key;
    topField.innerText = y;
  }
  if(e.key === "Enter"){
    //bottomField.innerText = x + y;
    return
  }
}

document.addEventListener('keydown', calculator)