console.log("I'm linked");

localStorage.setItem("name", "Uzo");

// Retrieving data with getItem

const firstName = localStorage.getItem("name");
console.log("First Name: " + firstName);

// removeItem in localStorage

localStorage.removeItem("name");

localStorage.setItem("name", "Thea");
localStorage.setItem("age", "16 years");
localStorage.setItem("idNumber", "1679");

// localStorage.clear();


const dataArr = '[{"name":"Thea", "age":"16 years", "idNumber":"1679"}]';

localStorage.setItem("users", dataArr);
// localStorage.clear(); here will clear the Values and give <null> in console for 'New data' and 'data new Arr'

let dataArrNew = localStorage.getItem("users");

console.log("New data", dataArrNew);
console.log("data new Arr", JSON.parse(dataArrNew));
