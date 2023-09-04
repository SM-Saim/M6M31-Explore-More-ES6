// Declare an array, multiply every emement of the array with 3 by usung map.
// Ex:1
const value = [22, 40, 10];
const result = value.map((x) => x * 3);
console.log(result);

// Declare an array, subtraction every emement of the array with 5 by usung map.
// Ex:2
const value2 = [55, 33, 44, 22, 33];
const arrowMap = value2.map((num) => num + 5);
console.log(arrowMap);

// Ex:3
const value22 = [55, 33, 44, 22, 33];
const arrowMaps = value2.map((num) => num / 2);
console.log(arrowMaps);

// Ex:4 Find length using map
const friends = ["Northan", "Barming", "Stark"];
const findLength = friends.map((frnd) => frnd.length);
console.log(findLength);

// Ex:5 Find First Letter in template string:
const friend = ["Northan", "Barming", "Stark"];
const findFirstLetter = `${friend.map((frnd) => frnd[0])}`;
console.log(findFirstLetter);
