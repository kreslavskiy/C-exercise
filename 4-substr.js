'use strict';

const merge = (str1='',str2='',str3='') => {
    const index = str1.indexOf(str2);
    const lastindex = str1.lastIndexOf(str2) ;
    str1.replace(str2, str3);
    const str4 = str1.slice(index, index+str2.length);
    return str1.replace(str4, str3);
};

console.log(merge('aaabbbccc','aaa','xxx'));