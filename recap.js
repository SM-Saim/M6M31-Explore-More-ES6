/* 
1.var let const :
block scpoe: mane holo er value gula shudu er moddei thake .jemon if, else ei gula tar   second bracket er modde thake, tar mane era block scpoe. 
var-block scope na, mane eta block er baire jai, spell kore.
let,const block scoped. Mne block er baire jai na,
Ei jonno var baad.
let diea amra reassign korte parbo, const reassign korte parbo na.

2.default parameter.
3.template literals.
4.destructuring and spread operator
5.Object.keys(), Object.values() ei 2ta ES5, Object.entries()-> Eta ES6  
6. for of used in array and string [ES6]
7. for in used in object [ES5] 
*/

// Template literals
const a = 56;
const number = [33, 55, 66, 77, 897, 22];
const obj = {
  name: "Sakib Khan",
  age: 43,
  lives: "New York",
};

const tempLit = `My name is ${obj.name}. I am ${a} years old. My code number is ${number[4]}`;
console.log(tempLit);

// arrow
const value = (a) => a * a;
const sum = value(4);
console.log(sum);

const value2 = (x, y) => x + y;
const total = value2(5, 4);
console.log(total);

// Destructuring:
const { age, numbers, ...rest } = {
  Name: "Galib",
  age: 55,
  numbers: 33,
  alive: "yes",
};
console.log(age, numbers, rest);

const [first, ...bakigula] = ["kabir", "jamil", "Tawhid"];
console.log(first, bakigula);
