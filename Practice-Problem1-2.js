// Conver t e odd array to even using for loop and map
const value11 = [1, 3, 5, 7, 9];
const final = [];
for (const x of value11) {
  const result = x + 1;
  final.push(result);
}
console.log(final);

// Using
const usingMap = value11.map((total) => total + 1);
console.log(usingMap);

// Task-2
const num = [33, 50, 79, 78, 90, 101, 30];

const result = num.filter((a) => a % 10 === 0);
console.log(result);

const valus22 = num.find((x) => x % 10 === 0);
console.log(valus22);
