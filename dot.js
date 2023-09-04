// Dot:
// Ex: object er porperty paite hoile amra, property name. diea property name likle oi property er value pai jai. Eta k bole dot(.) notation.

const places = {
  name: "Shundarban",
  locate: "Khulna",
  3: "chattogang",
  "current-temp": 3.33,
};
console.log(places.locate);
// same kaj braket notation diea kora jai.[]. sei khetre bracket modde property er naam string akare likte hobe, ba variable declare kore tar modde property er naam string akare rakte hobe.
console.log(places["locate"]);

const val = "locate";
console.log(places[val]);

// 2nd braket er modde string akare property er naam dea ta amader bivinno somoy kaje lage.
// Jemon, proerty naam jodi number hoi, taile shudu . diea access korte parbo na,
// abar property er naam jodi semi color diea eker odik word hoi tailo . diea access korte parbo na.

// Ex:
console.log(places[3]);
console.log(places["current-temp"]);
