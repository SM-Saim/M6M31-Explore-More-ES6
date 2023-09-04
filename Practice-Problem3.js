const instructor = [
  { name: "Nandi", age: 28, position: "senior" },
  { name: "Akil", age: 26, position: "jonior" },
  { name: "Sobuj", age: 28, position: "senior" },
];

const res = instructor
  .filter((x) => x.position === "senior")
  .map((x) => x.name);
console.log(res);
