# hp-JavaScript-basic-problem-solving

# JavaScript Basic Problem Solving

### Submit your assignment by answering the questions in your VS Code, upload the code to your GitHub, then provide the link on time. Copying code from AI is strictly prohibited. If we find any AI-generated code, you will receive a zero (0) mark for the assignment.

---

### 1. Create a variable called carName, assign the value Volvo to it.

```js
let carName = "Volvo";
```

---

### 2. On one single line, declare three variables with the following names and values:

- firstName = "John"
- lastName = "Doe"
- age = 35

```js
let firstName = "John", lastName = "Doe", age = 35;
```

---

### 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

```js
let x = 10;
let y = 5;
x *= y; // x will be 50
```

---

### 4. Use comments to describe the correct data type of the following variables:

```js
let length = 16; // number
let lastName = "Johnson"; // string

const x = {
  firstName: "John",
  lastName: "Doe"
}; // object
```

---

### 5. Execute the function named myFunction.

```js
function myFunction() {
  alert("Hello World!");
}

myFunction(); // Call the function to see the output
```

---

### 6. Create an object called person with name = John, age = 50, then access the object to alert("John is 50").

```js
const person = { name: "John", age: 50 };
alert(person.name + " is " + person.age);
```

---

### 7. The `<button>` element should do something when someone clicks on it. Try to fix it!

```html
<button onclick="alert('Button clicked!')">Click me.</button>
```

---

### 8. Array Related Questions

1. Alert the number of items in an array, using the correct Array property:

    ```js
    const cars = ["Volvo", "Jeep", "Mercedes"];
    alert(cars.length);
    ```

2. Change the first item of Brand to "Ford":

    ```js
    const Brand = ["Volvo", "Jeep", "Mercedes"];
    Brand[0] = "Ford";
    ```

---

### 9. Math Related Problems

1. Use the correct Math method to create a random number:

    ```js
    let randomNum = Math.random();
    ```

2. Use the correct Math method to return the largest number of 10 and 20:

    ```js
    let maxNum = Math.max(10, 20);
    ```

3. Use the correct Math method to get the square root of 9:

    ```js
    let sqrtNum = Math.sqrt(9);
    ```

---

### 10. Comparison operator related problems

1. Choose the correct comparison operator to alert true, when x is greater than y:

    ```js
    let x = 10;
    let y = 5;
    alert(x > y); // true
    ```

2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough":

    ```js
    let age = 17;
    alert(age < 18 ? "Too young" : "Old enough");
    ```


# JavaScript Basic Problem Solving

Submit your assignment by answering the question in your VS code upload the code to your GitHub, then give the link on time. Copying code from AI is strictly prohibited. You will get a zero (0) mark in the assignment if we get any AI-generated code.

1. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
    
    ```jsx
    function celsiusToFahrenheit(celsius) {
      return ...;
    }
    
    console.log(celsiusToFahrenheit(0)); // 32
    console.log(celsiusToFahrenheit(25)); // 77
    
    ```
    
2. Write a function to check if a number is even. The function should take a single argument, which is the number to check.
    
    ```jsx
    function isEven(num) {
      return ...;
    }
    
    console.log(isEven(4)); // true
    console.log(isEven(7)); // false
    
    ```
    

1. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
    
    ```jsx
    function sum(a, b) {
      return ...;
    }
    
    console.log(sum(3, 4)); // 7
    console.log(sum(10, 20)); // 30
    
    ```
    

1. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
    
    ```jsx
    function findSmallestNum(arr) {
      return ...;
    }
    
    console.log(findSmallestNum([3, 5, 1, 9])); // 1
    console.log(findSmallestNum([-1, -5, 0, 10])); // -5
    
    ```
    
2. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
    
    ```jsx
    function countVowels(str) {
      let vowels = 'aeiouAEIOU';
      return ...;
    }
    
    console.log(countVowels("hello world")); // 3
    console.log(countVowels("Javascript")); // 3
    
    ```
    
3. Write a function to get the first element of an array. The function should take a single argument, which is the array.
    
    ```jsx
    function getFirstElement(arr) {
      return ...;
    }
    
    console.log(getFirstElement([1, 2, 3])); // 1
    console.log(getFirstElement(["a", "b", "c"])); // "a"
    
    ```
    
4. Write a function to check if an array is empty. The function should take a single argument, which is the array.
    
    ```jsx
    function isArrayEmpty(arr) {
      return ...;
    }
    
    console.log(isArrayEmpty([])); // true
    console.log(isArrayEmpty([1, 2, 3])); // false
    
    ```
    
5. Write a function to return the factorial of a number. The function should take a single argument, which is the number.
    
    ```jsx
    function factorialize(num) {
      if (num === 0 || num === 1) return 1;
      return ....;
    }
    
    console.log(factorialize(5)); // 120
    console.log(factorialize(7)); // 5040
    
    ```
    
6. Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
    
    ```jsx
    function reverseString(str) {
      return ...;
    }
    
    console.log(reverseString("hello")); // "olleh"
    console.log(reverseString("world")); // "dlrow"
    
    ```
    

1. Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
    
    ```jsx
    function toLowerCase(str) {
      return ...;
    }
    
    console.log(toLowerCase("HELLO WORLD")); // "hello world"
    console.log(toLowerCase("JavaScript")); // "javascript"
    
    ```
    
2. Write a function to find the length of a string. The function should take a single argument, which is the string.
    
    ```jsx
    function stringLength(str) {
      return ...;
    }
    
    console.log(stringLength("hello")); // 5
    console.log(stringLength("world")); // 5
    
    ```
    
3.  Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
    
    ```jsx
    function mergeArrays(arr1, arr2) {
      return ...;
    }
    
    console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
    console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
    
    ```
    
4.  Write a function to get the last element of an array. The function should take a single argument, which is the array.
    
    ```jsx
    function getLastElement(arr) {
      return ...;
    }
    
    console.log(getLastElement([1, 2, 3])); // 3
    console.log(getLastElement(["a", "b", "c"])); // "c"
    
    ```
    
5.  Write a function to get the first character of a string. The function should take a single argument, which is the string.
    
    ```jsx
    function getFirstCharacter(str) {
      return ...;
    }
    
    console.log(getFirstCharacter("hello")); // "h"
    console.log(getFirstCharacter("world")); // "w"
    
    ```
    
6.  Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
    
    ```jsx
    function sumArray(arr) {
      return ...;
    }
    
    console.log(sumArray([1, 2, 3, 4])); // 10
    console.log(sumArray([-1, -2, -3, -4])); // -10
    console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
    
    ```

# Js problem solving part 2
### Submit your assignment by answering the questions in your VS Code, upload the code to your GitHub, then provide the link on time. Copying code from AI is strictly prohibited. If we find any AI-generated code, you will receive a zero (0) mark for the assignment.

---

### 1. Create a variable called carName, assign the value Volvo to it.

```js
let carName = "Volvo";
```

---

### 2. On one single line, declare three variables with the following names and values:

- firstName = "John"
- lastName = "Doe"
- age = 35

```js
let firstName = "John", lastName = "Doe", age = 35;
```

---

### 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

```js
let x = 10;
let y = 5;
x *= y; // x will be 50
```

---

### 4. Use comments to describe the correct data type of the following variables:

```js
let length = 16; // number
let lastName = "Johnson"; // string

const x = {
  firstName: "John",
  lastName: "Doe"
}; // object
```

---

### 5. Execute the function named myFunction.

```js
function myFunction() {
  alert("Hello World!");
}

myFunction(); // Call the function to see the output
```

---

### 6. Create an object called person with name = John, age = 50, then access the object to alert("John is 50").

```js
const person = { name: "John", age: 50 };
alert(person.name + " is " + person.age);
```

---

### 7. The `<button>` element should do something when someone clicks on it. Try to fix it!

```html
<button onclick="alert('Button clicked!')">Click me.</button>
```

---

### 8. Array Related Questions

1. Alert the number of items in an array, using the correct Array property:

    ```js
    const cars = ["Volvo", "Jeep", "Mercedes"];
    alert(cars.length);
    ```

2. Change the first item of Brand to "Ford":

    ```js
    const Brand = ["Volvo", "Jeep", "Mercedes"];
    Brand[0] = "Ford";
    ```

---

### 9. Math Related Problems

1. Use the correct Math method to create a random number:

    ```js
    let randomNum = Math.random();
    ```

2. Use the correct Math method to return the largest number of 10 and 20:

    ```js
    let maxNum = Math.max(10, 20);
    ```

3. Use the correct Math method to get the square root of 9:

    ```js
    let sqrtNum = Math.sqrt(9);
    ```

---

### 10. Comparison operator related problems

1. Choose the correct comparison operator to alert true, when x is greater than y:

    ```js
    let x = 10;
    let y = 5;
    alert(x > y); // true
    ```

2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough":

    ```js
    let age = 17;
    alert(age < 18 ? "Too young" : "Old enough");
    ```

---

# JavaScript Basic Problem Solving (Function Practice)

Answer the following function problems:

---

### 1. Write a function to convert Celsius to Fahrenheit.

```js
function celsiusToFahrenheit(celsius) {
  return ...;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77
```

---

### 2. Write a function to check if a number is even.

```js
function isEven(num) {
  return ...;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

---

### 3. Write a function to sum two numbers.

```js
function sum(a, b) {
  return ...;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30
```

---

### 4. Write a function to find the smallest number in an array.

```js
function findSmallestNum(arr) {
  return ...;
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5
```

---

### 5. Write a function to count the number of vowels in a string.

```js
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return ...;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
```

---

### 6. Write a function to get the first element of an array.

```js
function getFirstElement(arr) {
  return ...;
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
```

---

### 7. Write a function to check if an array is empty.

```js
function isArrayEmpty(arr) {
  return ...;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false
```

---

### 8. Write a function to return the factorial of a number.

```js
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return ....;
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040
```

---

### 9. Write a function to reverse a string.

```js
function reverseString(str) {
  return ...;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
```

---

### 10. Write a function to convert a string to lowercase.

```js
function toLowerCase(str) {
  return ...;
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"
```

---

### 11. Write a function to find the length of a string.

```js
function stringLength(str) {
  return ...;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5
```

---

### 12. Write a function to merge two arrays.

```js
function mergeArrays(arr1, arr2) {
  return ...;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
```

---

### 13. Write a function to get the last element of an array.

```js
function getLastElement(arr) {
  return ...;
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"
```

---

### 14. Write a function to get the first character of a string.

```js
function getFirstCharacter(str) {
  return ...;
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"
```

---

### 15. Write a function to find the sum of all elements in an array.
```
function sumArray(arr) {
  return ...;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
```

### Submit your assignment by answering the questions in your VS Code, upload the code to your GitHub, then provide the link on time. Copying code from AI is strictly prohibited. If we find any AI-generated code, you will receive a zero (0) mark for the assignment.

---

### 1. Create a variable called carName, assign the value Volvo to it.

```js
let carName = "Volvo";
```

---

### 2. On one single line, declare three variables with the following names and values:

- firstName = "John"
- lastName = "Doe"
- age = 35

```js
let firstName = "John", lastName = "Doe", age = 35;
```

---

### 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

```js
let x = 10;
let y = 5;
x *= y; // x will be 50
```

---

### 4. Use comments to describe the correct data type of the following variables:

```js
let length = 16; // number
let lastName = "Johnson"; // string

const x = {
  firstName: "John",
  lastName: "Doe"
}; // object
```

---

### 5. Execute the function named myFunction.

```js
function myFunction() {
  alert("Hello World!");
}

myFunction(); // Call the function to see the output
```

---

### 6. Create an object called person with name = John, age = 50, then access the object to alert("John is 50").

```js
const person = { name: "John", age: 50 };
alert(person.name + " is " + person.age);
```

---

### 7. The `<button>` element should do something when someone clicks on it. Try to fix it!

```html
<button onclick="alert('Button clicked!')">Click me.</button>
```

---

### 8. Array Related Questions

1. Alert the number of items in an array, using the correct Array property:

    ```js
    const cars = ["Volvo", "Jeep", "Mercedes"];
    alert(cars.length);
    ```

2. Change the first item of Brand to "Ford":

    ```js
    const Brand = ["Volvo", "Jeep", "Mercedes"];
    Brand[0] = "Ford";
    ```

---

### 9. Math Related Problems

1. Use the correct Math method to create a random number:

    ```js
    let randomNum = Math.random();
    ```

2. Use the correct Math method to return the largest number of 10 and 20:

    ```js
    let maxNum = Math.max(10, 20);
    ```

3. Use the correct Math method to get the square root of 9:

    ```js
    let sqrtNum = Math.sqrt(9);
    ```

---

### 10. Comparison operator related problems

1. Choose the correct comparison operator to alert true, when x is greater than y:

    ```js
    let x = 10;
    let y = 5;
    alert(x > y); // true
    ```

2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough":

    ```js
    let age = 17;
    alert(age < 18 ? "Too young" : "Old enough");
    ```

---

# JavaScript Basic Problem Solving (Function Practice)

Answer the following function problems:

---

### 1. Write a function to convert Celsius to Fahrenheit.

```js
function celsiusToFahrenheit(celsius) {
  return ...;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77
```

---

### 2. Write a function to check if a number is even.

```js
function isEven(num) {
  return ...;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

---

### 3. Write a function to sum two numbers.

```js
function sum(a, b) {
  return ...;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30
```

---

### 4. Write a function to find the smallest number in an array.

```js
function findSmallestNum(arr) {
  return ...;
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5
```

---

### 5. Write a function to count the number of vowels in a string.

```js
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return ...;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
```

---

### 6. Write a function to get the first element of an array.

```js
function getFirstElement(arr) {
  return ...;
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
```

---

### 7. Write a function to check if an array is empty.

```js
function isArrayEmpty(arr) {
  return ...;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false
```

---

### 8. Write a function to return the factorial of a number.

```js
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return ....;
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040
```

---

### 9. Write a function to reverse a string.

```js
function reverseString(str) {
  return ...;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
```

---

### 10. Write a function to convert a string to lowercase.

```js
function toLowerCase(str) {
  return ...;
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"
```

---

### 11. Write a function to find the length of a string.

```js
function stringLength(str) {
  return ...;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5
```

---

### 12. Write a function to merge two arrays.

```js
function mergeArrays(arr1, arr2) {
  return ...;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
```

---

### 13. Write a function to get the last element of an array.

```js
function getLastElement(arr) {
  return ...;
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"
```

---

### 14. Write a function to get the first character of a string.

```js
function getFirstCharacter(str) {
  return ...;
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"
```

---

### 15. Write a function to find the sum of all elements in an array.

```js
function sumArray(arr) {
  return ...;
}

console.log(sumArray([1, 2, 3,