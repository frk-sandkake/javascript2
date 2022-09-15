const values = [100, 200, 300, 400];

const newValues = values.map(function(element, index, array){
  return element;
});
console.log("Element: ", newValues);


const newValue = values.map((element, index, array) =>{
  return array;
});
console.log("Array: ", newValue);


const values1 = [200, 200, 300, 400];

function callbackFn(element, index, array){
  return index;
}

const newValueCB = values1.map(callbackFn);
console.log("Index: ", newValueCB);


// return the first and last name
const names = [
  {firstName: 'Björn', lastName: 'Gustavsson'},
  {firstName: 'Lisa', lastName: 'Nilsson'},
  {firstName: 'Eva', lastName: 'Brun'},
  {firstName: 'Paul', lastName: 'Philipson'},
];
console.log("Before map: ", names);


const newCombinedNames = names.map(({firstName, lastName}) => {
  return `${firstName} ${lastName}`
});
console.log("After map: ", newCombinedNames);


// return the area of the triangles:
const triangles = [
  {base: 100, height: 200},
  {base: 50, height: 100},
  {base: 600, height: 700},
];

const areaOfTriangles = triangles.map(({base, height}) => {
  return  1/2 * base * height; // also 0.5 * base * height & base * height / 2
});

console.log(areaOfTriangles);
