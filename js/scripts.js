//Business Logic
function PizzaDirectory(){
  this.pizzas = {};
}

function Pizza(order, size, toppings){
  this.order = order;
  this.size = size;
  this.toppings = toppings;
}