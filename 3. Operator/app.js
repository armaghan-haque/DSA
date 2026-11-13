
// Arithematic operators : + , - , * , % , /

// division (/)
// Integer/Integer is always integer
// Math.floor() is used to get the floor value if the divison is in decimal
// console.log(10/5);
// console.log(2%10);

// let x = 5;
// let y = '8';
// let z = x + y;

let voteable;
let age = Number(document.getElementById("age").value);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}

