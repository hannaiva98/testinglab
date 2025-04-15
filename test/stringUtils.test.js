import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('stringUtils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('should throw an error for invalid input', () => {
      expect(() => capitalize(123)).to.throw();
    });
  });

  describe('reverseString', () => {
    it('should reverse the string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('should throw an error for invalid input', () => {
      expect(() => reverseString(null)).to.throw();
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
      expect(isPalindrome('level')).to.be.true;
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('should throw an error for invalid input', () => {
      expect(() => isPalindrome({})).to.throw();
    });
  });
});