// console log the secondary school location of shopia

let data = {
  Shopia: {
    id: 33,
    study: [
      {
        primary: [{ school_name: "ABC School" }, { location: "Petersburg" }],
      },
      {
        secondery: [{ school_name: "BBC School" }, { location: "Humburg" }],
      },
    ],
  },
};

console.log(data.Shopia.study[1].secondery[1].location);

// Task:2
// console.log Petersbug and Harry differently
let students = {
  33333: {
    name: "Jasim",
    section: 4,
    class: 5,
    Address: {
      "Bulding No": 12,
      street: "S.T Johnson",
      city: "Petersburg",
      country: "UK",
    },
  },
  44444: {
    name: "Harry",
    section: 4,
    class: 5,
    Address: {
      "Bulding No": 13,
      street: "S.T Johnson",
      city: "Hamburg",
      country: "Germany",
    },
  },
};

console.log(students["33333"].Address.city);
//
console.log(students["44444"].name);

// Task:3
// console.log the Hablu and  medium separetly

let data2 = {
  data: [
    {
      bookId: 33444,
      bookDetails: {
        name: "Hablu",
        catagory: "XYZ",
        price: 33445,
      },
      bookCatagory: "Basic",
    },
    {
      bookId: 44,
      bookDetails: {
        name: "Gablu",
        catagory: "XYZ",
        price: 33445,
      },
      bookCatagory: "Medium",
    },
  ],
};
//1
console.log(data2.data[0].bookDetails.name);
//2
console.log(data2.data[1].bookCatagory);
