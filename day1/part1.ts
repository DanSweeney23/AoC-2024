
const text = Deno.readTextFileSync("input.txt");
const lines = text.split("\n");

const arr1: number[] = [];
const arr2: number[] = [];

for (const line of lines) {
  const parts = line.split('   ');
  arr1.push(parseInt(parts[0]));
  arr2.push(parseInt(parts[1]));
}

arr1.sort();
arr2.sort();

let distance = 0;

for (let i = 0; i < lines.length; i++) {
  distance += Math.abs(arr1[i] - arr2[i]);
}

console.log(distance);