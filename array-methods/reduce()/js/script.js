const values = [2, 3, 5, 10, 20];

const sum = values.reduce((total, value) => {

  total += value;
  // Looping through every number in array
  // 0 = 0 + 2 = 2 + 3 = 5 + 5 = 10 + 10 = 20 + 20 = 40
  return total;

}, 0); // put the initial value
console.log("the sum: ", sum); // 40

const garages = [
  {make: "BMW", cars: 10},
  {make: "Volvo", cars: 20},
  {make: "Opel", cars: 40},
  {make: "Volkswagen", cars: 1},
];

const totalCars = garages.reduce((total, {cars}) => {
  total += cars;
  return total;
}, 50);
console.log("Total number of cars in the garages: ", totalCars); // 121

const products = [
  {
    title: "eggs",
    isInStock: true,
    quantity: 1,
    price: 60,
    currency: "NOK"
  },
  {
    title: "flour",
    isInStock: true,
    quantity: 50,
    price: 40,
    currency: "NOK"
  },
  {
    title: "milk",
    isInStock: true,
    quantity: 100,
    price: 25,
    currency: "NOK"
  },
  {
    title: "cheese",
    isInStock: false,
    quantity: 0,
    price: 120,
    currency: "NOK"
  },

];

// Total price of the products in stock
const productsInStock = products.reduce((total, product) =>
/*  if(product.isInStock === true) {
    total += product.price * product.quantity;
  }*/
  product.isInStock ? (total += product.price * product.quantity) : total, 0,
  // return total;
);
console.log(productsInStock);

// condition ? true : false
