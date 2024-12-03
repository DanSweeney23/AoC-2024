const text = Deno.readTextFileSync("input.txt");

const regex = /(?:mul\(\d+,\d+\)|do\(\)|don't\(\))/g;
const mulMatches = text.match(regex);

console.log(mulMatches);

if (!mulMatches) Deno.exit();

let total = 0;
let shouldDo = true;
for (const match of mulMatches) {
  if (match === "do()") {
    shouldDo = true;
  } else if (match === "don't()") {
    shouldDo = false;
  } else if(shouldDo) {
    const digits = match.split('(')[1].split(',').map(d => parseInt(d));
    total += digits[0] * digits[1];
  }
}

console.log(total)