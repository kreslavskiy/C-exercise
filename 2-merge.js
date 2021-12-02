'use strict';

//80

const merge = (...arrays) => {
    return arrays.reduce(function TwoArraysConcatinator (arr1, arr2) {
        return arr1.concat(arr2)
    });
};

const a = [1, 2, 3, 4];
const b = ['', 'loh']
const c = [true, false, true];
const d = [24, 24, 24]

console.log(merge(a, b, c, d));