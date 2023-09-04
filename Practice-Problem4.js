const people = [
  { name: "Mina", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Shucharita", age: 22 },
];
// Using for loop
let val33 = 0;
for (const val of people) {
  const output = val.age;
  val33 = val33 + output;
}
console.log(val33);

const total = people.reduce((x, y) => x + y.age, 0);
console.log(total);
