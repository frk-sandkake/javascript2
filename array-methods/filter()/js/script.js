// example 1 - return >= 4

const numbers = [4, 5, 7, 12, 400, 65, 2, 1];

/*
const filterNumb = numbers.filter((number) => {
  if (number >= 4) {
    return true;
  }
});
*/

const filterNumb = numbers.filter((number) => number >= 4)

console.log(filterNumb);

// function that return >= 100
const values = [0, 23, 55, 66, 777, 100, 500, 250];

/*
const filterValue = values.filter((number) => {
  if(number >= 100) {
    return true;
  }
});
*/

// const filterValue = values.filter((number) => number >= 100)


function filterArray(arr) {
  // const filteredValues = arr.filter((element) => element >= 100)
  return arr.filter((element) => element >= 100);
}
const myFilteredArr = filterArray(values);
console.log("filterArray ", myFilteredArr);

const people = [
  { name: 'Kari', age: 28 },
  { name: 'Astrid', age: 32 },
  { name: 'Hans', age: 22 },
  { name: 'Inger', age: 19 },
  { name: 'Liv', age: 42 },
  { name: 'Kristoffer', age: 12 },
  { name: 'Anne', age: 12 },
  { name: 'Martin', age: 17 },
  { name: 'Joakim', age: 45 },
  { name: 'Ellen', age: 7 },
];

// person.age = { age }
const filterPeople = people.filter(({ age }) => age >= 22);
console.log(filterPeople);
console.table(filterPeople);


const games = [
  { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
  { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
  { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
  { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
  { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];


const filteredGames = games.filter(({isMultiplayer, rating}) => {
    return (isMultiplayer === true) && (rating >= 8);
});
console.table(filteredGames);


const gamesRated = games.filter(({rating}) => rating >= 8);
console.log(gamesRated);
console.table(gamesRated);