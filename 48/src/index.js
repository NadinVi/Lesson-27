import Sum from "./components/Sum.js";
import Sub from "./components/Sub.js";
import Mult from "./components/Mult.js";
import Div from "./components/Div.js";



const add = new Sum(10, 2);
console.log(add.sum());

const deduct = new Sub(12, 5);
console.log(deduct.sub());

const multiply = new Mult(7, 4);
console.log(multiply.Mult());

const divide = new Div(28, 2);
console.log(divide.Div());
