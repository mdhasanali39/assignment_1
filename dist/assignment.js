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
// formatString("hello",);
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
