console.log("I'm linked");

// Destructing Objects and Arrays
// const { property1, property2 } = objectName;
// const [value1, value2] = arrayName;


// Destructure the properties from personObject, instead of using dotNotation for every key:
const person = {
  firstName: 'Berit',
  lastName: 'Nilsen',
  country: 'Norway'
}

/*
const firstName = person.firstName;
const lastName = person.lastName;
const country = person.country;
*/

const { firstName, lastName, country } = person

const greeting = `Hello, I'm ${firstName} ${lastName} from ${country}`;
console.log(greeting);


// Destructuring used in functions
const user = {
  firstName: 'Lars',
  lastName: 'Nilsen'
}

function greetUser(userObject) {
  const {firstName, lastName} = userObject;
  console.log("greetUser ", `Hello ${firstName} ${lastName}`);
}

greetUser(user);


function greetUsers({firstName, lastName}) {
  console.log("greetUsers ", `Hello ${firstName} ${lastName}.`);
}

greetUsers(user);


// Destructuring used in Array with .filter()
const people = [
  {
    firstName: 'Berit',
    lastName: 'Nilsen',
    score: 8,
  },
  {
    firstName: 'Lars',
    lastName: 'Nilsen',
    score: 9,
  },
  {
    firstName: 'Nina',
    lastName: 'Person',
    score: 4,
  }
];

 // Value(score) being destructured
 // using dotNotation(currentItem.score) to assign values to variables
const winnersOld = people.filter((currentItem) =>
{
  if (currentItem.score >= 5) {
    return true;
  }
});
console.log(winnersOld);


// Destructuring as a parameter: 'score' property from the currentItem element
const winnersNew = people.filter(({ score }) => {
  if (score >= 5) {
    return true;
  }
});
console.log(winnersNew);


// example destructuring array with numbers
//           index:    0   1   2   3   4   5
const streetNumbers = [12, 30, 34, 50, 1, 67];

// X=0 Y=1 in index
const [x, y] = streetNumbers;

console.log(x, y);

const names = ["Hesh", "Linda", "Alex", "Fariad", "Yasmin", "Aladdin", "Jenny"];

const [nameX, nameY, nameZ, ...others] = names;
console.log(nameX, nameY, nameZ);
console.log(...others);
console.log(others);


// Using the '...rest' parameter:
const names1 = ['Berit', 'Lars', 'Nina', 'Oskar'];

const [name0, name1, ...rest] = names1;

console.log(name0, name1); // Berit, Lars
console.log(rest); // [Nina, Oskar]

// Ignoring values
const values = [0, 1, 2, 3, 4];

const [value0, , value2] = values;
console.log(value0, value2);

const numbers = [4, 5, 6, 19, 30, 12];

const [num0, , num3, , num6] = numbers;
console.log(num0, num3, num6);

const myCat = {
  name: "Thea",
  age: "16",
  typerrr: "house cat"
};

const {name, age, typerrr:breed} = myCat;
console.log(`My cat's named ${name}, she's ${age} years old and is a regular ${breed}`);