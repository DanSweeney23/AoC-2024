const text = Deno.readTextFileSync("input.txt");
const reports = text.split("\n").map(line => line.split(' ').map(item => parseInt(item)));

function isSafe(report: number[]) {
    if (report[0] === report[1]) return false;
    const direction = report[0] > report[1];

    let i = 1;

    while (i < report.length) {
        const lastNum = report[i - 1];
        const thisNum = report[i];

        if (lastNum === thisNum) return false;
        if (lastNum > thisNum !== direction) return false;
        if (Math.abs(lastNum - thisNum) > 3) return false;

        i += 1;
    }

    return true;
}

let numSafe = 0;

outer: for(const r of reports) {
    if(isSafe(r)) numSafe += 1;
    else {
        for(let i = 1; i < r.length; i++) {
            const newReport = r.slice(0, i-1).concat(r.slice(i));
            if(isSafe(newReport)) {
                numSafe += 1;
                continue outer;
            }
        }
    }
}

console.log(numSafe);