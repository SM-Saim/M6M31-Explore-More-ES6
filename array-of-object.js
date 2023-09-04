const nmbrs = [
  { name: "lenovo", price: 66666, processor: "i7", color: "black" },
  { name: "Dell", price: 70000, processor: "i9", color: "black" },
  { name: "asus", price: 66200, processor: "i7", color: "silver" },
  { name: "mac-book", price: 16000, processor: "i5", color: "red" },
];

// map:
const values = nmbrs.map((x) => x.name);
console.log(values);

const values2 = nmbrs.map((a) => a.price);
console.log(values2);

// forEach()
const values11 = nmbrs.forEach((y) => console.log(y.processor));

// filter
const values22 = nmbrs.filter((z) => z.price > 65000);
console.log(values22);

//find
const values44 = nmbrs.find((a) => a.price > 50000);
console.log(values44);

// reduce
const value55 = nmbrs.reduce(
  (previous, current) => previous + current.price,
  0
);
console.log(value55);
