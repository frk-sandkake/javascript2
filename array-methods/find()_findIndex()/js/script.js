// .find() & .findIndex()
const values = [200, 300, 50, 10, 20];

const findValue = values.find((currentElement) => currentElement === 50);
console.log(findValue);


const profiles = [
  {name: "Uzo", id: 25138},
  {name: "Mats", id: 25139},
  {name: "Emil", id: 25140},
  {name: "Lisa", id: 25141}
];
console.log("1st name: ", profiles[0].name);
console.log("2nd name: ", profiles[1]["name"]);
console.log("Numb letters in name: ",profiles[0]["name"].length);

// This is how JavaScript reads stings ["E", "m", "i", "l"}
const findE = profiles.find(({name}) => name[0].toLowerCase() === "e");
console.log("1st name with letter E ", findE);

const books = [
  {title: "River runs deep", isInStock: false },
  {title: "Star Wars - The book", isInStock: false },
  {title: "What happened to Roger Rabbit?", isInStock: true },
];

const findBook = books.find((book) => book.isInStock === true);
console.log(findBook.title);
console.log("No books in stock", findBook.title);

/*
function findBooks(books) {
  return (books.find(books.isInStock) ? books.title : books.title );
}
console.log(findBooks(true));
console.log(findBooks(false));*/

