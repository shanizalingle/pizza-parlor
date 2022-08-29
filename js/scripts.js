//Business Logic
function PizzaDirectory(){
  this.pizzas = {};
}

function Pizza(order, number, size, toppings = []){
  this.order = order;
  this.number = number;
  this.size = size;
  this.toppings = toppings;
}

PizzaDirectory.prototype.addPizza = function(pizza){ 
  this.pizzas[pizza.order] = pizza;
}

Pizza.prototype.calculateCost = function(){
  if (this.size === "Large" && this.toppings.includes("Pepperoni") || this.size === "Large" && this.toppings.includes("Sausage")) {
    let cost = "$16"
    return cost;
  }
  if (this.size === "Regular" && this.toppings.includes("Pepperoni") || this.size === "Regular" && this.toppings.includes("Sausage")) {
    let cost = "$14"
    return cost;
  }
  if (this.size === "Mini" && this.toppings.includes("Pepperoni") || this.size === "Mini" && this.toppings.includes("Sausage")) {
    let cost = "$12"
    return cost;
  }
  if (this.size === "Large") {
    let cost = "$14"
    return cost;
  }
  if (this.size === "Regular") {
    let cost = "$12"
    return cost;
  }
  if (this.size === "Mini") {
    let cost = "$10"
    return cost;
  }
}

//UI Logic
let pizzaDirectory = new PizzaDirectory();

function handleSubmission(event){
  event.preventDefault();
  const inputtedOrder = document.querySelector("input#order-input").value;
  const inputtedNumber = document.querySelector("input#number-input").value;
  const inputtedSize = document.querySelector("input[name='size-input']:checked").value;
  const inputtedToppingsArray = []
  const inputtedToppings = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < inputtedToppings.length; i++) {
    inputtedToppingsArray.push(inputtedToppings[i].value);
  }

  let pizza = new Pizza(inputtedOrder,  inputtedNumber, inputtedSize, inputtedToppingsArray);
  let cost = pizza.calculateCost();
  pizzaDirectory.addPizza(pizza);
  document.querySelector(".orderSpan").innerText = inputtedOrder;
  document.querySelector(".numberSpan").innerText = inputtedNumber;
  document.querySelector(".sizeSpan").innerText = inputtedSize;
  document.querySelector(".toppingsSpan").innerText = inputtedToppingsArray.join(", ");;
  document.querySelector(".totalSpan").innerText = cost;
} 

function orderOnline() {
  document.getElementById("orderDiv").removeAttribute("class");
}

function resetForm() {
  document.getElementById("order-form").reset();
  document.getElementById("reviewDiv").removeAttribute("class");
}

function placeOrder() {
  document.getElementById("placeOrderDiv").removeAttribute("class");
  document.getElementById("reviewDiv").setAttribute("class");
}

window.addEventListener("load", function() {
  this.document.querySelector("img#orderImg").addEventListener("click", orderOnline);
  this.document.querySelector("form#order-form").addEventListener("submit", handleSubmission);
  this.document.querySelector("form#order-form").addEventListener("submit", resetForm);
  this.document.querySelector("form#review-form").addEventListener("submit", placeOrder);
});