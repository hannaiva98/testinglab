const { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } = require('../utils/usersListUtils');

const sampleUsers = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@mail.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@mail.com' },
  { id: 3, name: 'Charlie', age: 35, email: 'charlie@mail.com' },
];

describe('usersListUtils', () => {
  describe('filterUsersByAge', () => {
    it('should filter users by age range', () => {
      const result = filterUsersByAge(sampleUsers, 21, 30);
      expect(result).toEqual([
        { id: 1, name: 'Alice', age: 25, email: 'alice@mail.com' },
        { id: 2, name: 'Bob', age: 30, email: 'bob@mail.com' },
      ]);
    });

    it('should throw an error for invalid input', () => {
      expect(() => filterUsersByAge({}, 20, 30)).toThrow();
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users alphabetically by name', () => {
      const result = sortUsersByName(sampleUsers);
      expect(result.map(u => u.name)).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should throw an error for invalid input', () => {
      expect(() => sortUsersByName('not an array')).toThrow();
    });
  });

  describe('findUserById', () => {
    it('should return the user with the given ID', () => {
      expect(findUserById(sampleUsers, 2)).toEqual(sampleUsers[1]);
    });

    it('should return null if the user is not found', () => {
      expect(findUserById(sampleUsers, 999)).toBeNull();
    });

    it('should throw an error for invalid input', () => {
      expect(() => findUserById('invalid', 1)).toThrow();
    });
  });

  describe('isEmailTaken', () => {
    it('should return true if the email exists', () => {
      expect(isEmailTaken(sampleUsers, 'bob@mail.com')).toBeTruthy();
    });

    it('should return false if the email does not exist', () => {
      expect(isEmailTaken(sampleUsers, 'nobody@mail.com')).toBeFalsy();
    });

    it('should throw an error for invalid input', () => {
      expect(() => isEmailTaken(null, 'test@mail.com')).toThrow();
    });
  });
});