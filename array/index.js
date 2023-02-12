const fruits = ["Apple", "Mango", "Orange", "Banana", "Blackberry"];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  //   console.log(fruit);
}

/*
The push() method adds one or more elements to the end of an array
*/
fruits.push("Papaya", "Lemon");
console.log(fruits);

/*
The pop() method removes the last element from an array 
*/
fruits.pop();
console.log(fruits);

/*
The shift() method removes the first element from an array 
*/
fruits.shift();
console.log(fruits);

/*
The unshift() method adds one or more elements to the beginning of an array
*/
fruits.unshift("Strawberry");
console.log(fruits);
