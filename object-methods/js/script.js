
const recipe = {
  "ingredient_0" : "Egg",
  "ingredient_1" : "Milk",
  "ingredient_2" : "Flour",
}

for(let i = 0; i < 3; i++) {
  console.log(recipe["ingredient_" + i]);
}

// < "ingredient_".length; and recipe["ingredient_" + i]); Logs Egg, Milk, Flour and undefined

const user = {
  name: "Hesham",
  lastName: "El Masry",
  age: 30,
}

// for in loop:
for(const theKey in user) {
  console.log(user[theKey]); // Logs Hesham, El Masry, 30
}

const petProfile = {
  name: "Thea",
  age: 16,
  animalType: "Cat",
}

for(const theKey in petProfile) {
  console.log("the key is ", theKey);
  console.log("the value is ", petProfile[theKey]);
  console.log(`The ${theKey} is ${petProfile[theKey]}`); // Logs
}

const userProfile = {
  name: "Mats",
  age: 26
}

const userProfileKeys = Object.keys(userProfile);
console.log(userProfileKeys);
console.table(userProfileKeys);