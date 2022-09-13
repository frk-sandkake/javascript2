console.log("I'm linked");

/**
 * Description of Function
 * @param {dataType} TheParameter [OptionalParameter] OrderOfValue
 * @return {dataType} ReturnDescription
 * @example - In VSCode for color on code
 *  ```js
 *  console.log("Hello world!");
 *  ```
 *  @example - in WebStorm
 **/

// 1.
/**
 * Adds two numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @return {number} The sum of a + b
 **/

function addNumbers(a, b){
  return a + b;
}
addNumbers(4, 6);

// 2.
/**
 * Displaying a message to the user
 * @return {string} Message to users
 **/

function greetUsers() {
  return `<span>Hello and thanks for using my app!</span>`;
}
greetUsers();

// 3.
/**
 * This function takes three
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value
 *
 **/

function addThreeNumbers(a, b, c) {
  return a + b + c;
}
addThreeNumbers(20, 15, 60);

// 4.
/**
 * Display cat names
 * @param {string} cat1 First Value
 * @param {string} cat2 Second Value
 * @param {string} cat3 Third Value
 * @param {string} cat4 Fourth Value
 * @return {string} List of cat names
 **/

function addFourCats(cat1, cat2, cat3, cat4) {
  return `<ul>
              <li>${cat1}</li>
              <li>${cat2}</li>
              <li>${cat3}</li>
              <li>${cat4}</li>
         </ul>`
}
addFourCats();

// 5.
/**
 * This function takes three
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value
 * @param {number} d Fourth Value
 * @return {number} Sum of Values
 * @example
 * const a = 20;
 * const b = 80;
 * const c = 1;
 * const d = 9;
 * const sum = addFourNumbers(a, b, c, d);
 * // Expect sum to be 110
 **/

function addFourNumbers(a, b, c, d) {
  return a + b + c + d;
}
const sum = addFourNumbers(20, 15, 60, 45);
console.log(sum);

// 6.
/**
 * Multiply two numbers
 * @param {number} a First Value
 * @param {number} [b] Second Value
 * @return {number} Multiplies the Values
 **/

function multiplyNumbers(a, b= 10) {
  return a * b;
}
multiplyNumbers(5);

// 7.
/**
 * Add two numbers
 * @typedef {(number|string)} NumberLike
 **/

function addTwoDigits(a, b) {
  return a + b;
}

addTwoDigits();

// 8. Complex objects

/**
 * @param {{name: string, role: string}} userObjects loggedIn User Object
 * @param {string} userObjects.name jsadlk
 * @param {string} userObjects.role jsahfwef
 * **/

function handleUserLogin({name, role}) {
  loginUserWithToken();
}

function loginUserWithToken() {

}
handleUserLogin();

const userLoginData = {
  name: Linda,
  role: basic
}
console.log(userLoginData);
console.log(userLoginData.name);

// First enter Path to jsdoc.js Then the Path of your script.js
// node_modules/jsdoc/jsdoc.js js/script.js