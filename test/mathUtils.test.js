import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(5, 3)).to.equal(2);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(4, 2)).to.equal(8);
    });
  });

  describe('divide', () => {
    it('should return the result of division', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });
  });
});