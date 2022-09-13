console.log("I'm linked");

const userDetails = {
  name: "Uzo",
  id: 1234,
  isStudent: true,
  section: "Front-End Developer"
}

console.log("userDetails JSON: ", userDetails);

const userDetailsJSON = JSON.stringify(userDetails);

console.log("userDetails Stringify: ", userDetailsJSON);

const userDetailsParse = JSON.parse(userDetailsJSON);

console.log("userDetails Parse: ", userDetailsParse);

// Create a JSON data object and convert to JS

/*const petData = {
  name: "Thea",
  age: "16 years",
  isCat: true,
  isDog: false,
  idNumber: 3482
}
console.log("Pet details: ", petData);

const petDataStringify = JSON.stringify(petData);
console.log("Pet data in Sting: ", petDataStringify);

 const petDataParse = JSON.parse(petDataStringify);
 console.log("Pet data parse: ", petDataParse);
 */

const petDataJSON = '{"name":"Thea", "age":"16 years", "isCat": true, "isDog": false, "idNumber": 3482}'
const petDataParse = JSON.parse(petDataJSON);
console.log("Pet data parse: ", petDataParse);
