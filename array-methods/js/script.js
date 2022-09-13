console.log("I'm linked");

// original array
// const arrayValues = [5, 6, 7 ,8];

// New array called 'newArray' that contains the
// result from the .map methode
// const newArray = arrayValues.map(/* code here */);


const values = [100, 200, 300, 400];


const newValues = values.map(function(element, index, array){
  return element;
});
console.log("Element: ", newValues);


const newValue = values.map((element, index, array) =>{
  return array;
});
console.log("Array: ", newValue);


const values1 = [100, 200, 300, 400];
function callbackFn(element, index, array){
  return index;
}

const newValueCB = values1.map(callbackFn);
console.log("Index: ", newValueCB);