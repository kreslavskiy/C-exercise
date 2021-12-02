'use strict';

//70-80

const checkIfPalindrome = (word) => {
    if (word.toLowerCase().replace(/ /gi,'').split('').reverse().join('') == word.toLowerCase().replace(/ /gi,'')) {
        return true;
    } else {
        return false;
    }
};

console.log(checkIfPalindrome ('Лёша на полке клопа нашёл'));
console.log(checkIfPalindrome ('12 1'));


