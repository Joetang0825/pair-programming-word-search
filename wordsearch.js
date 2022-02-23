const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    let transposedletters = transpose(letters);
    const verticalJoin = transposedletters.map(ls => ls.join(''));
    const reversedJoin = reverse(letters);

    if (letters.length === 0) {
        return false;
    }

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    for (v of verticalJoin) {
        if (v.includes(word)) {
            return true;
        }
    }

    for (r of reversedJoin) {
        if (r.includes(word)) {
            return true;
        }
    }

    return false;
}

const transpose = function (matrix) {
    // Put your solution here
    let newMatrix = [];

    const newWidth = matrix.length;
    const newLength = matrix[0].length;

    for (let i = 0; i < newLength; i++) {
        newMatrix[i] = [];
        for (let x = 0; x < newWidth; x++) {
            newMatrix[i].push(matrix[x][i]);
        }
    }

    return newMatrix;

};

const reverse = function (matrix) {
    // Put your solution here
    let newMatrix = [];
    let reversedArray;

    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [];
        newMatrix[i].push(matrix[i].reverse());
        newMatrix[i] = matrix[i].join("");
    }

    return newMatrix;

};



module.exports = wordSearch