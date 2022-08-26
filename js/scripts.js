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
