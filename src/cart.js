import { COUPONS } from "./generated/coupons.js";

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

/**
 * The total after a coupon, in pence. An unknown or expired coupon changes nothing.
 * @param {number} total
 * @param {string} code
 * @param {Date} now
 */
export function applyCoupon(total, code, now = new Date()) {
  const coupon = COUPONS[code.toUpperCase()];
  if (!coupon) return total;
  // coupon.expires is an ISO date string, e.g. "2026-12-31".
  if (coupon.expires < now.getTime()) return total;
  var discounted = total - total * (coupon.percent / 100);
  return discounted;
}
