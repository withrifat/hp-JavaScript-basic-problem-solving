// =========================== JavaScript Basic Problem Solving Set 1 ===================

// Question 1: Declare a variable named `carName` and assign it the value "Volvo".
let carName = "Volvo";

// Question 2: Declare three variables in one line: firstName = "John", lastName = "Doe", age = 35.
let firstName = "John", lastName = "Doe", age = 35;

// Question 3: Update `x` using assignment operator to result in 50 (x = x * y).
let x = 10;
let y = 5;
x *= y;
console.log(x);  // Output: 50

// Question 4: Add appropriate comments to describe each variable’s data type.
let length = 16; // number
let surName = "Johnson"; // string
const fullName = {
    firstName: "John",
    lastName: "Doe"
}; // object

// Question 5: Call the function named `myFunction`.
function myFunction() {
    alert("Hello World!");
}
myFunction();

// Question 6: Create an object and display "John is 50" using object values.
let person = {
    name: "John",
    age: 50,
};
alert(person.name + " is " + person.age);

// Question 7: Make a button that responds to click events properly.
<button onclick="this.innerText='Try to fix it!'">Click me.</button>

// Question 8: Array Operations
// 1. Alert number of items in the `cars` array.
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first element in `Brand` to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";

// Question 9: Math-related operations
// 1. Generate a random number between 0-9.
let randomValue = Math.floor(Math.random() * 10);
console.log(randomValue);

// 2. Get the maximum of two numbers.
let result = Math.max(10, 20);
console.log(result);

// 3. Get square root of 9.
console.log(Math.sqrt(9));

// Question 10: Comparison and Conditional Operators
// 1. Use comparison operator to check if x > y.
let a = 10;
let b = 5;
if (a > b) {
    alert('X is greater than Y');
} else {
    alert('Y is greater than X');
}

// 2. Use ternary operator for age check.
let currentAge = 15;
currentAge < 18 ? alert("Too young") : alert("Old enough");


// =========================== JavaScript Basic Problem Solving Set 2 ===================

// Question 1: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

// Question 2: Check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// Question 3: Sum two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
console.log(sum(10, 20));

// Question 4: Find smallest number in an array
function findSmallestNum(arr) {
    return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9]));
console.log(findSmallestNum([-1, -5, 0, 10]));

// Question 5: Count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world"));
console.log(countVowels("Javascript"));

// Question 6: Get the first element of an array
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));

// Question 7: Check if an array is empty
function isArrayEmpty(arr) {
    return arr.length === 0;
}
console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1, 2, 3]));

// Question 8: Calculate factorial of a number
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
}
console.log(factorialize(5));
console.log(factorialize(7));

// Question 9: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
console.log(reverseString("world"));

// Question 10: Convert string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toLowerCase("HELLO WORLD"));
console.log(toLowerCase("JavaScript"));

// Question 11: Find length of a string
function stringLength(str) {
    return str.length;
}
console.log(stringLength("hello"));
console.log(stringLength("world"));

// Question 12: Merge two arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));

// Question 13: Get last element of an array
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

// Question 14: Get first character of a string
function getFirstCharacter(str) {
    return str[0];
}
console.log(getFirstCharacter("hello"));
console.log(getFirstCharacter("world"));

// Question 15: Sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((x, y) => x + y, 0);
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([-1, -2, -3, -4]));
console.log(sumArray([1.5, 2.5, 3.5]));
