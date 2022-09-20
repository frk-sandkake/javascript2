export function calculateTax(amount, taxPercent = 15) {
  return amount + amount * (taxPercent / 100);
}