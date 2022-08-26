# _Pizza Parlor_

#### By _Shaniza Lingle_

#### _This website will take pizza orders, you can choose your own size and toppings._

## GitHub Pages


## Technologies Used

* HTML
* CSS
* Markdown
* Bootstrap

## Description

_Pizza Parlor is a website that will take pizza orders based on size and toppings, and return an amount for the cost of your pizza. This website uses constructors and prototypes, and test-driven development._

## Setup/Installation Requirements
* Clone this repository into your desktop_
* _Navigate to the pizza-parlor directory_
* _Open index.html_

## Tests
<details>
<summary>Click Here
</summary>

Describe: PizzaDirectory()

Test 1: It should have a property called pizza that has a value of an empty array 
Code: 
let pizzaDirectory = new PizzaDirectory();
Expected Output: 
pizza = {};

Describe: Pizza();

Test 1: the pizza prototype will have an order property
Code: 
let pizzaDirectory = new PizzaDirectory();
let pizza = new pizza("Shaniza's order");
Expected Output:
pizza = {"Shaniza's order"};


Test 2: the pizza prototype will also have a size and toppings property
Code:
let pizzaDirectory = new PizzaDirectory();
let pizza = new pizza("Shaniza's order", "small", "pineapple");
Expected Output:
pizza = {order:"Shaniza's order", size:"small", toppings: "pineapple"};


Test 3: Toppings should take multiple inputs and create an array
Code:
let pizza = new pizza("Shaniza's order", "small", ["cheese", "pineapple"]);
Expected Ouput:
toppings: array 
  0: cheese;
  1: pineapple;


Describe PizzaDirectory.prototype.addPizza = function()

Test 1: It will add a new pizza to the pizza directory
Code: 
pizzaDirectory.addPizza(pizza);
Expected Output: 
pizzas = {
  Shaniza's order: Pizza (order:"Shaniza's order", size:"small", toppings: "pineapple")
}

</details>

## Known Bugs

* _N/A_

## License

_(MIT) https://en.wikipedia.org/wiki/MIT_License_

Copyright (c) _2022_ _Shaniza Lingle_
