/*
The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.
*/
const summerFruits = ["Mango", "Orange", "Watermelon"];
const winterFruits = ["Apple", "Banana"];

const allFruits = summerFruits.concat(winterFruits);
console.log(allFruits);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(numbers);
