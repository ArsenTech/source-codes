// Get a random number between two values.
const getRandomNumber = (min, max) => Math.floor(Math.random()*max-min)+min;
console.log(getRandomNumber(1,10))

// Calculate the factorial of a given number.
const factorial = number => number===1 ? number : number*factorial(number-1);
console.log(factorial(7))

// Generate a random item from an array.
const getRandomValue = arr => arr[Math.floor(Math.random()*arr.length)];
console.log(getRandomValue(["a","b","c","d","e","f","g","h"]))

// Shuffle an array.
const shuffle = arr => arr.sort(()=>0.5-Math.random());
console.log(shuffle([0,1,2,3,4,5,6,7,8,9]))

// Check if a number is positive.
const isPositive = num => num > 0;
console.log(isPositive(5))
console.log(isPositive(-5))

// Get even numbers from an array.
const getEvenNumbers = arr => arr.filter(num=>num%2===0);
console.log(getEvenNumbers([0,1,2,3,4,5,6,7,8,9]))

// Find the average of an array.
const getAverage = arr => (arr.reduce((acc,num)=>acc+num,0))/arr.length;
console.log(getAverage([0,1,2,3,4,5,6,7,8,9]))

// Check if a given array is empty.
const isEmpty = arr => arr.length === 0;
console.log(isEmpty([]))
console.log(isEmpty([1,2,3]))

// Count the vowels in a string.
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log(countVowels("ArsenTech"))

// Reverse a given string.
const reverseString = str => str.split("").reverse().join("");
console.log(reverseString("Hello World"))

// Get odd numbers from an array.
const getOddNumbers = arr => arr.filter(num=>num%2!==0);
console.log(getOddNumbers([0,1,2,3,4,5,6,7,8,9]))

// Check if a number is even.
const isEven = num => num % 2 === 0;
console.log(isEven(1));
console.log(isEven(2));

// Convert a given string to an array of words.
const toWordsArray = str => str.split(" ");
console.log(toWordsArray("Lorem Ipsum Dolor Sit amet"))

// Remove duplicates from an array.
const getUniqueItems = arr => [...new Set(arr)];
console.log(getUniqueItems([0,1,1,2,3,4,4,5,6,7,8,8,8,9,9,9,9,1,2,3,3,3,3,3]))

// Capitalize a given string.
const capitalize = str => str[0].toUpperCase() + str.slice(1);
console.log(capitalize("arsenTech"))

// Check if a number is odd.
const isOdd = num => num % 2 !== 0;
console.log(isOdd(2));
console.log(isOdd(3))

// Calculate the area of a circle.
const getCircleArea = rad => Math.PI*rad**2;
console.log(getCircleArea(8))

// Sum all numbers in an array.
const sum = arr => arr.reduce((acc,num)=>acc+num,0);
console.log(sum([0,1,2,3,4,5,6,7,8,9]))

// Check if a string is a palindrome.
const isPalindrome = str => str === str.split("").reverse().join("");
console.log(isPalindrome("kayak"))
console.log(isPalindrome("coding"))

// Convert Celsius to Fahrenheit.
const toFahrenheit = celsius => (celsius*9/5)+32;
console.log(toFahrenheit(30))