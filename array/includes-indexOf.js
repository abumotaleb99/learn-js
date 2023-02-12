/*
The includes() method determines whether an array includes 
a certain value among its entries, returning true or false as appropriate.
*/
const pets = ["Cat", "Parrot", "Goldfish", "Macaw"];

console.log(pets.includes("Cat")); // true
console.log(pets.includes("Puppy")); // false

/*
The indexOf() method returns the first index at which a given element 
can be found in the array, or -1 if it is not present.
*/
const fruits = ["Apple", "Mango", "Orange", "Banana", "Blackberry"];

console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("Strawberry"));

if (fruits.indexOf("Blackberry") !== -1) {
  console.log("Exist");
} else {
  console.log("Not Exist");
}
