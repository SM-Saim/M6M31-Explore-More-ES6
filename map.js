/* Map:
Ans1:
 Maps loops through each elements of an array, and do the operation that you passend in the callback function and hold the result from each operatins in an array and finally returns you the array. 
Ans2:
Map:map kora mane array er sob upadan er upor se ekta loop chalabe,
prottekta upadaner jonno ami jei function ta liksi oita ke call korbe,
ami function theke jei jinish ta return korbo, seta akta array er modde rekhe loop ses hoile, oi total result er array ta return korbe. 
Ans3:
Shortcut: array er prottekta upadaner er upor ekta function er maddome loop chalabe, funtion er result gula ekta array er modde rekhe array ta show korbe.

 */

//  Array er upadan gula k first e double korbo, then double value gula k arekta new array er modde rakbo.
const value = [33, 44, 55, 66];
const doubled = [];
for (const num of value) {
  const double = num * 2;
  doubled.push(double);
}

// Akon same result pawar jonno amra map apply korbo.
const number = [3, 5, 6, 8, 9];

// using regular functiion
function value11(num) {
  return num * 2;
}
const result = number.map(value11);
console.log(result);

// using arrow function
const maan = (a) => a * 2;

const totalArray = number.map(maan);
console.log(totalArray);

// More shortcut
const finalTotal = number.map((x) => x * 2);
console.log(finalTotal);

const finalTotall = number.map((x) => x);
console.log(finalTotall);
