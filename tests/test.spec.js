const { sayHello } = require('../utils/test');

describe('sayHello', () => {
  test('should return Hello World', () => {
    expect(sayHello()).toBe('Hello World');
  });
});