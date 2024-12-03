const text = Deno.readTextFileSync("input.txt");

const regex = /mul\(\d+,\d+\)/g;
const mulMatches = text.match(regex);

console.log(mulMatches);

if (!mulMatches) Deno.exit();

let total = 0;
for (const match of mulMatches) {
  const digits = match.split('(')[1].split(',').map(d => parseInt(d));
  total += digits[0] * digits[1];
}

console.log(total)