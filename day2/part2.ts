const text = Deno.readTextFileSync("input.txt");
const reports = text.split("\n").map(line => line.split(' ').map(item => parseInt(item)));

function isSafe(report: number[], canPass: boolean) : boolean {
    if (report[0] === report[1]) {
        if(canPass) {
            const newReport = report.slice(1);
            return isSafe(newReport, false)
        }
        return false;
    };
    const direction = report[0] > report[1];

    let i = 1;

    while (i < report.length) {
        const lastNum = report[i - 1];
        const thisNum = report[i];

        if (lastNum === thisNum
            || lastNum > thisNum !== direction
            || Math.abs(lastNum - thisNum) > 3
        ) {
            if(canPass) {
                const newReport1 = report.slice(0, i-1).concat(report.slice(i));
                const newReport2 = report.slice(0, i).concat(report.slice(i+1));
                return isSafe(newReport1, false) || isSafe(newReport2, false);
            };
            return false;
        }

        i += 1;

    }

    return true;
}

const numSafe = reports.reduce((total, report) => isSafe(report, true) ? total + 1 : total, 0);
console.log(numSafe);