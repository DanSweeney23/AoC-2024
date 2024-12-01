
const text = Deno.readTextFileSync("input.txt");
const lines = text.split("\n");

const arr1: number[] = [];
const set2: { [key: number]: number } = {};

for (const line of lines) {
  const parts = line.split('   ');

  arr1.push(parseInt(parts[0]));

  const num2 = parseInt(parts[1]);

  if (set2[num2] === undefined) set2[num2] = 1;
  else set2[num2] += 1;
}

let similarity = 0;

for (const num of arr1) {
  const instances = set2[num] ?? 0;
  similarity += num * instances;
}

console.log(similarity);