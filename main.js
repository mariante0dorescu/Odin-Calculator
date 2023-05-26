"use strict";

const topField = document.querySelector(".calculator__output--top");
const bottomField = document.querySelector(".calculator__output--bottom");
const calcInput = document.querySelector(".calculator__input");
let operator;
let x = "";
let y;

function calculator(input) {
  // console.log(input)

  if(input === "Escape" || input === "AC") {
    topField.innerHTML = "&nbsp;";
    bottomField.innerHTML = "&nbsp;";
    x = y = 0
  }

  if(input >= 0 && input <= 9){
    if(bottomField.innerText === "0") {bottomField.innerText=""}
    x += input;
    bottomField.innerText += input;
  }

  if(input === "+" || input === "-" || input === "*" || input === "/" || input === "%"){
    bottomField.innerText = "0"
    operator = input;
    y = x;
    topField.innerText = y + " " + operator;
  }

  if(input === "Enter" || input === "="){
    topField.innerHTML = "&nbsp;";
    bottomField.innerHTML = "&nbsp;";
    x = calculate(operator, +x, +y);
    bottomField.innerText = x;
    //console.log(calculate(operator, x, y))
    return;
  }
}

function calculate(operator, x, y){
 console.log(x,y)
  bottomField.innerHTML = "&nbsp;";
  if(operator === "+") return Number(x) + Number(y);
  if(operator === "-") return x - y;
  if(operator === "/") return y / x;
  if(operator === "*") return x * y;
  if(operator === "%") return (x / y) * 100;
}

document.addEventListener('keydown', (e) => calculator(e.key))
calcInput.addEventListener("click", (e) => {
  calculator(e.target.id)
})