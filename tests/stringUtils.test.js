const { capitalize, reverseString, isPalindrome } = require('../utils/stringUtils');

describe('stringUtils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should throw an error for invalid input', () => {
      expect(() => capitalize(123)).toThrow();
    });
  });

  describe('reverseString', () => {
    it('should reverse the string', () => {
      expect(reverseString('abc')).toBe('cba');
    });

    it('should throw an error for invalid input', () => {
      expect(() => reverseString(null)).toThrow();
    });
  });

  describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
      expect(isPalindrome('level')).toBeTruthy();
    });

    it('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).toBeFalsy();
    });

    it('should throw an error for invalid input', () => {
      expect(() => isPalindrome({})).toThrow();
    });
  });
});