const { getLine } = require('./boilerplate');


(async () => {
    const T = Number(await getLine());
    let Ti = 0;
    while (++Ti <= T) {
        const N = Number((await getLine()).split(' '));
        const arrA = (await getLine()).split(' ');
        if (arrA.length !== N) throw 'invalid number of args';
        let perfect = 0;
        for (let base = 0; base < N; base++) {
            let sum = Number(arrA[base]);
            if (Number.isInteger(Math.sqrt(sum))) perfect++;
           
            for (let i = 1; base + i < N; i++) {
                sum += Number(arrA[base + i]);
                if (Number.isInteger(Math.sqrt(sum))) perfect++;
            }
        }

        
     
        console.log('Case #%d: %d', Ti, perfect)
    }
})()