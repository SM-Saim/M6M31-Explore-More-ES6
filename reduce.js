// Reduce: sob gula milai ekta result dibe.
// first e 2 ta parameter lagbe, initial 0 dorte hobe,then bam pase , callback function er parameter dibo 2 ta, map, filtr, find e claaback function e parameter ditam 1ta.
// Ekane 2 ta value mane 1stt er ta previous maan ta, tar ager tar sathe jog kore  kore agabe, ar arekta hol current ta, jar athe next step e jog hobe.

const numb = [33, 44, 55, 66, 7];
const result = numb.reduce((previous, current) => previous + current, 0);
console.group(result);

const results = numb.reduce((p, c) => p + c, 0);
console.group(results);
