/**
 * A cart's total, in integer pence.
 * @param {{ pricePence: number, quantity: number }[]} items
 * @returns {number}
 */
export function totalPence(items) {
  return items.reduce((sum, item) => {
    if (!Number.isInteger(item.pricePence) || !Number.isInteger(item.quantity) || item.quantity < 0) {
      throw new RangeError("price and quantity must be whole, non-negative numbers");
    }
    return sum + item.pricePence * item.quantity;
  }, 0);
}
