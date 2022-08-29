# _Pizza Parlor_

#### By _Shaniza Lingle_

#### _This website will take pizza orders, you can choose your own size and toppings._

## GitHub Pages
_https://shanizalingle.github.io/pizza-parlor/_

## Technologies Used

* HTML
* CSS
* Markdown
* Bootstrap

## Description

_Portland Pizzeria is a website that will take pizza orders based on size and toppings, and return an amount for the cost of your pizza. This website uses constructors and prototypes, and test-driven development._

## Setup/Installation Requirements
* _Clone this repository into your desktop_
* _Navigate to the pizza-parlor directory_
* _Open index.html_
* _or open with gh-pages https://shanizalingle.github.io/pizza-parlor/_

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

Test 4: the pizza protoype will have a phone number property
Code: 
let pizzaDirectory = new PizzaDirectory();
let pizza = new pizza("Shaniza's order", "small", "pineapple", "555 555 5555");
Expected Output:
pizza = {order:"Shaniza's order", size:"small", toppings: "pineapple", "555 555 5555"};


Describe PizzaDirectory.prototype.addPizza = function()

Test 1: It will add a new pizza to the pizza directory
Code: 
pizzaDirectory.addPizza(pizza);
Expected Output: 
pizzas = {
  Shaniza's order: Pizza (order:"Shaniza's order", size:"small", toppings: "pineapple")
}

Describe Pizza.prototype.calculateCost = function()

Test: Cost of pizza will be returned
Code:
pizza.calculateCost()
Expected Ouput:
cost = $16;

</details>

## Known Bugs

* _PlaceOrderDiv not displaying on submit_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Shaniza Lingle_
