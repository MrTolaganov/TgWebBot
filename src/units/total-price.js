export const totalPrice = (arr) =>
  arr.reduce((a, c) => a + c.price * c.quantity, 0);
