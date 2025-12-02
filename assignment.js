//Convert the string "123" to a number and add 7. (0.5 Grade)
num = "123"
console.log(Number(num)+7);

//Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
let value = 0 
if (!value) {
  console.log("invalid");
}


//Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
for (let index=1 ; index <= 10 ; index++) {
  if (index % 2 ===0) {
    continue ;
    
  }
  console.log(index)
}


//4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
const num = [1,2,3,4,5]
const findEven = num.filter(n=>n%2===0);
console.log(findEven);

//5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
fruits = ['apple','banana']
moreFruits = [...fruits, 'orange','mango']
console.log(moreFruits);

//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
const days =1
switch (days) {

  case 1:
    console.log('Saturday')
    break;

  case 2:
    console.log('Sunday')
    break;


  case 3:
    console.log('Monday')
    break;


  case 4:
    console.log('Tuseday')
    break;

  case 5:
    console.log('Wednesday')
    break;


  case 6:
    console.log ('Thursday')
    break;


  case 7:
    console.log('Friday')
    break;



  default:
    break;
}

//7. Create an array of strings and return their lengths using map method (0.5 Grade)

const abc =["a","ab","abc"]
const abcFind =abc.map(n=>n.length);
console.log(abcFind)

//8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)

const num=15

if (num%3===0 && num%5===0 ) {
  console.log("Divisible by both")
}
else 
console.log("hello nothing!")


// 9. Write a function using arrow syntax to return the square of a number
const square = (num) => num * num;
console.log("Question 9:", square(5)); // Output: 25





// 10. Write a function that destructures an object to extract values and returns a formatted string.
function formatPerson(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}
const person = { name: 'John', age: 25 };
console.log("Question 10:", formatPerson(person)); // Output: 'John is 25 years old'





// 11. Write a function that accepts multiple parameters and returns their sum.
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Question 11:", sumAll(1, 2, 3, 4, 5)); // Output: 15





// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}


// 13. Write a function to find the largest number in an array.
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("Question 13:", findLargest([1, 3, 7, 2, 4])); // Output: 7

// 14. Write a function that takes an object and returns an array containing only its keys.
function getKeys(obj) {
  return Object.keys(obj);
}
const user = { name: "John", age: 30 };
console.log("Question 14:", getKeys(user)); // Output: ["name", "age"]

// 15. Write a function that splits a string into an array of words based on spaces.
function splitWords(str) {
  return str.split(" ");
}
console.log("Question 15:", splitWords("The quick brown fox"));






3. What are the main differences between == and ===?

== compares values but changes types to match first:
5 == "5"  // true (makes "5" into a number)
0 == false // true

=== compares both value AND type without changing anything:
5 === "5"  // false (number vs string)
0 === false // false

Always use === because it's safer and more predictable.




4. Explain how try-catch works and why it is important in async operations.

try-catch lets you handle error without crashing your program.

try {
  // code that might fail
} catch (error) {
  // what to do if it fails
}

It's super important with async code because things like API calls can fail for many reasons
(no internet, server down, wrong URL). Without try-catch, one error could crash your whole app.

Example:
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {
    console.log("Oops, something went wrong!");
  }
}


