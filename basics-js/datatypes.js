var price = 500; // number
console.log(typeof price);

var name = "Aurora Lawrence"; // string
console.log(typeof name);

var isHappy = true; // boolean
console.log(typeof isHappy);

/*
isArray() method is used to check if an object is an array. 
The Array.isArray() method returns true if an object is an array, 
otherwise returns false . Note: For an array, the typeof operator returns an object.
*/
var fruits = ["Banana", "Apple", "Mango", "Tangerine", "Pineapple"]; // array
console.log(Array.isArray(fruits));

var myCar = {
  make: "Tesla",
  model: "Mustang",
  year: 1965,
};
console.log(typeof myCar);
