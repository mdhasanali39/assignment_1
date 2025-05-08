"use strict";
function formatString(input, toUpper) {
    if (toUpper === undefined || toUpper) {
        const upperCaseStr = input.toUpperCase();
        console.log(upperCaseStr);
        return upperCaseStr;
    }
    else {
        const lowerCaseStr = input.toLowerCase();
        console.log(lowerCaseStr);
        return lowerCaseStr;
    }
}
formatString("hello");
