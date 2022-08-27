//Business Logic
function PizzaDirectory(){
  this.pizzas = {};
}

function Pizza(order, size, toppings = []){
  this.order = order;
  this.size = size;
  this.toppings = toppings;
}

PizzaDirectory.prototype.addPizza = function(pizza){ 
  this.pizzas[pizza.order] = pizza;
}

//UI Logic
let pizzaDirectory = new PizzaDirectory();

function handleSubmission(event){
  event.preventDefault();
  const inputtedOrder = document.querySelector("input#order-input").value;
  const inputtedSize = document.querySelector("input[name='size-input']:checked").value;
  const inputtedToppingsArray = []
  const inputtedToppings = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < inputtedToppings.length; i++) {
    inputtedToppingsArray.push(inputtedToppings[i].value);
  }

  let pizza = new Pizza(inputtedOrder, inputtedSize, inputtedToppingsArray);
  pizzaDirectory.addPizza(pizza);
  console.log(pizzaDirectory.pizzas);
} 

function resetForm() {
  document.getElementById("submit-form").reset();
  }

window.addEventListener("load", function() {
  this.document.querySelector("form#submit-form").addEventListener("submit", handleSubmission);
  this.document.querySelector("form#submit-form").addEventListener("submit", resetForm);
});