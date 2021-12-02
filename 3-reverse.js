'use strict';

//additional

const reverse = (word) => {
    const arr = [];
    for (const letterIndex in word) {
        arr.push(word[word.length - 1 - letterIndex]);
    }
    return arr.join('');
};

console.log(reverse('nigger'));