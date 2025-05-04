const { findMax, findMin, removeDuplicates } = require('../utils/arrayUtils');

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('should return the maximum value in the array', () => {
      expect(findMax([1, 4, 2])).toBe(4);
    });

    it('should throw an error for invalid input', () => {
      expect(() => findMax('not an array')).toThrow();
    });
  });

  describe('findMin', () => {
    it('should return the minimum value in the array', () => {
      expect(findMin([10, 3, 7])).toBe(3);
    });

    it('should throw an error for invalid input', () => {
      expect(() => findMin(123)).toThrow();
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from the array', () => {
      expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should throw an error for invalid input', () => {
      expect(() => removeDuplicates({})).toThrow();
    });
  });
});