const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

exports.getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})()

/*const io = require('readline')
    .createInterface(process.stdin);

const readln = () => new Promise(
    res => io.question('>', answer => res(answer))
);

const formatSolution = async (solution = Function(), argsLn = 1) => {
    try {
        const T = Number(await readln());
        let Ti = 0;
        while (++Ti <= T) {
            const args = [];
            for (let i = 0; i < argsLn; ++i) {
                args.push(await readln())
            }
            const result = solution(...args);
            console.log('Case #%d: %d', Ti, result)
        }
        process.exit(0)
    } catch (error) {
        console.log('ERROR: ', error)
    }
}

formatSolution((a, b) => Number(a) + Number(b), 2)
*/
