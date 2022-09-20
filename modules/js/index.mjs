import '../css/style.css'

import {calculateTax} from './tax.mjs';
import {formatCurrency} from './utils.mjs';
import {displayAmount} from './display.mjs';

const price = 100;
const taxPercent = 15;

const priceWithTax = calculateTax(price, taxPercent);
console.log(priceWithTax);

// using parameter.toFixed(2)
const formattedPriceWithTax = formatCurrency(priceWithTax, 'kr');
console.log(formattedPriceWithTax);

displayAmount(formattedPriceWithTax);
