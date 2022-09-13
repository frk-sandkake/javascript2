console.log("I'm linked");

// Creating a mapObject with key/value pair:
// Use .set('key', 'value') method to add the key/value parameters
// Use .get('key') method to get value of the key
// Use .delete('key') method to delete value of the key
// Use .size method to get number of items

const myMapObject = new Map();

myMapObject.set('a', 1);

console.log(myMapObject.get('a'));

myMapObject.delete('a');

const mapItems = new Map();

mapItems.set('b', 2);
mapItems.set('c', 3);

console.log(mapItems.size);