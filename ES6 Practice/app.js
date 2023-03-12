//arrow function

let sayname = (name) => {
    return name;
}
console.log(sayname("Saanvi Gupta"));

let titless = title => title;
console.log(titless("ES6"));

let double = (num1, num2) => num1 * num2;
console.log(double(2, 3));

//Export and Import

import { hello } from "./sell.js";
hello()

import { data as da } from "./sell.js";
console.log(da);

import person from "./customer.js";
console.log(person);

//class and object

// class Customer{
//     constructor(n) {
//         this.name = n;
//     }
    
//     buy() {
//         console.log("hello.......");
//         console.log(this.name);
//     }
// }

// class GuestCustomer extends Customer{
//     hello() {
//         console.log("hello");
//     }
// }

// let customer1 = new GuestCustomer('dikshu');
// console.log(customer1);
// customer1.buy();


//spread and rest operator(...)

let list = ["BMW", "Audi", "Ferrari"];
let newlist = ["Mercedes", ...list];
console.log(newlist);

let persons = {
    name: "XYZ",
    age: 28
}

let newpersons = {
    ...persons,
    address: "Ambala"
}
console.log(newpersons);

//rest = when used in function's argument.

function hi(...all) {
    console.log(all);
}

hi(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Array Destructuring

let list1 = ["BMW", "Audi", "Ferrari"];

let [car1, , car2] = list1;

console.log(car2);

//Object Destructuring

let people = {
    name: "EFG",
    age: 17
}

let { name, age } = people;

console.log(age, name);

//reference (array,object) and primitive type (string,number)

let num3 = 100;
let num4 = num3;
num3 = 50;
console.log(num3);
console.log(num4);

let person1 = {
    name:"Evi"
}

let person2 = person1;
person2.name = "Inu";

console.log(person1);
console.log(person2);

//map function

let array1 = [2, 5, 7, 10];

// let array2 = array1.map(function (x) {
//     return x * 2;
// });

//or using arrow function

let array2 = array1.map(x => x * 2);

console.log(array1);
console.log("The double of each element of array1 is", array2);

//filter function

let array3 = [2, 5, 7, 10];

// let array4 = array3.map(function (x) {
//     return x * 2;
// });

//using arrow function
let array4 = array3.filter(x => x % 2 == 0);
console.log(array3);
console.log("Even number of array3 = ", array4);
