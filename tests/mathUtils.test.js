const { add, subtract, multiply, divide } = require('../utils/mathUtils');

describe('mathUtils', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(4, 2)).toBe(8);
    });
  });

  describe('divide', () => {
    it('should return the result of division', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
});