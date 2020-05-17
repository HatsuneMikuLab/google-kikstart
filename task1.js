const { getLine } = require('./boilerplate');

(async () => {
    const T = Number(await getLine());
    let Ti = 0;
    while (++Ti <= T) {
        const [N, K] = (await getLine()).split(' ');
        const arrA = (await getLine()).split(' ');
        if (arrA.length !== Number(N)) throw 'invalid number of args';
        let countdownMap = {};
        for (let i = 0; i < N; ++i) {
            if (Number(arrA[i]) === 1) {
                countdownMap[1] = countdownMap[1] ? countdownMap[1] + 1 : 1;
                j = 1;
                while (i - j >= 0 && Number(arrA[i - j]) - Number(arrA[i]) === j) {
                    const head = Number(arrA[i - j++])
                    countdownMap[head] = countdownMap[head] ? countdownMap[head] + 1 : 1
                }
            }
        }
        console.log('Case #%d: %d', Ti, countdownMap[Number(K)] || 0)
    }
})()



