// filter: kono ekta sorto onusare kisu upadan k bachai kora k filter bole.
// filter selecta elements based on a conditions and returns an array with the elemets that fullfilled the condition.
const players = [22, 33, 55, 66, 7];
//
const result1 = players.filter((x) => x > 30);
console.log(result1);
//
const result2 = players.filter((a) => a > 50);
console.log(result2);
//
const result3 = players.filter((num) => num % 2 === 1);
console.log(result3);
//
const friends = ["Northan", "Barming", "Stark", "faraz", "Tim"];
const result4 = friends.filter((frnd) => frnd.length > 4);
console.log(result4);
const { vss } = 6;
