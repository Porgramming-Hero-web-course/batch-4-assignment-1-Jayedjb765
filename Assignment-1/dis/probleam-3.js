"use strict";
const countWordOccurrences = (fullsentence, word) => {
    const words = fullsentence.toLowerCase().split(" ");
    const selectedword = word.toLowerCase();
    let count = 0;
    for (const i of words) {
        if (i === selectedword) {
            count++;
        }
    }
    return count;
};
const totalCount = countWordOccurrences("I love  typescript ", "typescript");
console.log(totalCount);
