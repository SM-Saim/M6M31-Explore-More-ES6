/*Jokon ai kono data access korbo, tokhon valo vabe kheal korte hobe, data ta kisher modde ki style e ase.
 */

// Data access
const value = [{ name: "Abul hasan", age: 36 }];
console.log(value[0].name);

// Ex:2
const data = {
  total: 555555500,
  products: [
    { name: "lenovo", color: "Black", processor: "i7", price: 67000 },
    { name: "Dell", color: "Black", processor: "i5", price: 70000 },
  ],
};

// Find the second product price
const secondPrice = data.products[1].price;
console.log(secondPrice);

// Ex:3
const values = {
  id: 5001,
  name: "Sariful Raj",
  address: {
    street: {
      first: "Dhaka",
      second: "20/22 uttora",
      third: "Lalkhan Bazar",
      code: 223344,
    },
  },
};

// Find the second address of ariful raj
const results = values.address.street.second; //Eta kei chain bole Event.
console.log(results);

// Optional Chaining: ami sure na emon kono property er age ? dibo, taile na thakle undefined dibe, ar samne agabe na, etai optional chaining.

// Optional Chain: (?) Er mane holo jodi maan pawa jai, taole samne agao, jodi maan pawa na jai, tale undefined dekhabe , error dekha be na.
const num = {
  id: 5002,
  name: "Sariful Raju",
  address: {
    street: {
      first: "Chattogong",
    },
  },
};

console.log(values.address.street.code); //Ex:3 is working fine

console.log(num.address.street.second?.code); //Optional chaining applied
