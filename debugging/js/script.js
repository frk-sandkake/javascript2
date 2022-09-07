/*
console.log();
console.clear();
console.warn();
console.error();
console.table();

// .LOG is used to test your code

console.log("Hello, something some text!");

const name = "Thea";

console.log(name);

const responseDataOne = [
  {
    name: "Hesham",
    age: "30"
  },
  {
    name: "Emil",
    age: "29"
  }
];

const responseDataTwo = [
  {
    name: "Hesham",
    age: "30"
  },
  {
    name: "Emil",
    age: "29"
  }
];

console.log("responseDataOne ", responseDataOne);
console.log("responseDataTwo ", responseDataTwo);
// Put the array-name in string before, so it's easier to read in console

console.log(1+2);

const sum = 1+2;

console.log("my " + "name " + "is " + sum + " Hesham");
// Space inside " string " is the same as space in a sentence

console.log(`my name is Hesham ${sum}`);

// in browser you don't need the console.log(); you just use the variable

// console.clear(); or clear(); in browser, will clear the console

console.table(responseDataOne);


console.time(); // This starts the timer
console.timeEnd(); // This ends the timer

function counter () {
  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }
}

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");


let average = (2 + 4+ 7) / 3;
console.log(average);*/

function sum(num1, num2) {
  return num1 + num2;
}

let number1 = 10;
let number2 = 11;

let total = sum(number1, number2);
console.log(total);

function getAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let myAverage = getAverage(15, 65, 30);
console.log(myAverage);

const myArray = [
  10, 30, 50, 67
];

var sum = 0;

myArray.forEach((num) =>
{ sum += num});

average = sum / myArray.length;
console.log("myArray.forEach ", average);

function getArrAverage(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log("total", total);
  const numberOfItems = arr.length;
  console.log("numberOfItems", numberOfItems);
  /*let average = total / numberOfItems;
  return average;*/
  return total / numberOfItems;
}

const resultAverage = getArrAverage(myArray);

console.log("resultAverage.forLoop ", resultAverage);

/*function getFetchCatFacts() {
  fetch('https://catfact.ninja/fact')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("catFactObject", data);
      console.log(data.fact);
    })
    .catch(error => error)
}

getFetchCatFacts();*/

async function getAsyncCatFacts() {
  const response = await fetch('https://catfact.ninja/fact');
  console.log("response ", response);
  const catFacts = await response.json();
  console.log("catFacts ", catFacts);
}

getAsyncCatFacts().then(r => {});

function counter() {
  for(let i = 1; i <= 3; i++) {
    console.log("result", i === 2);
  }
}

counter();