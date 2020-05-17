const { getLine } = require('./boilerplate');

/*const solution = (initMatrix, currMatrix, leftPoly, sortedPoly = []) => {
    if (leftPoly.length === 0) return sortedPoly;
    leftPoly.forEach(poly => {
        leftPoly = leftPoly.filter(p => p !== poly);
        for (let r = 0; r < initMatrix.length; r++)
            for (let c = 0; c < initMatrix[r].length; c++) {
                currMatrix[r][c] = initMatrix[r][c] === poly ? poly : '-';
        
        solution(initMatrix, currMatrix, leftPoly, sortedPoly)
    })
}


(async () => {
    const T = Number(await getLine());
    let Ti = 0;
    while (++Ti <= T) {
        const [R, C] = (await getLine()).split(' ');
        let matrix = [];
        for (let i = 0; i < Number(R); i++) {
            matrix.push((await getLine()).split(' '));
        }
        const currMatrix = [];
        const leftPoly = [];
        for (let r = 0; r < matrix.length; r++)
            for (let c = 0; c < matrix[r].length; c++) {
                currMatrix[r][c] = '-';
                if (!leftPoly.includes(matrix[r][c])) 
                    leftPoly.push(matrix[r][c])
            }
        solution(matrix, currMatrix, leftPoly);

        
     
        console.log('Case #%d: %d', Ti, countdownMap[Number(K)] || 0)
    }
})()
*/