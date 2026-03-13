function contagemDemaiores (arr) {
let counts = {};
arr.forEach((count) => {
counts[count] = (counts[count] || 0) + 1;
});

const maxVal = Math.max(...Object.values(counts));
const num = Object.keys(counts).find((key) => counts[key] === maxVal);
return num;
}
console.log(contagemDemaiores([1, 9, 9, 7, 1, 9 ,2, 1, 9, 8, 9, 4, 6, 9, 3, 2, 9]));
