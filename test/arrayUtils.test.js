import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('should return the maximum value in the array', () => {
      expect(findMax([1, 4, 2])).to.equal(4);
    });

    it('should throw an error for invalid input', () => {
      expect(() => findMax('not an array')).to.throw();
    });
  });

  describe('findMin', () => {
    it('should return the minimum value in the array', () => {
      expect(findMin([10, 3, 7])).to.equal(3);
    });

    it('should throw an error for invalid input', () => {
      expect(() => findMin(123)).to.throw();
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from the array', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('should throw an error for invalid input', () => {
      expect(() => removeDuplicates({})).to.throw();
    });
  });
});