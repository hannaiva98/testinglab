import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken
} from '../utils/usersListUtils.js';

const sampleUsers = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@mail.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@mail.com' },
  { id: 3, name: 'Charlie', age: 20, email: 'charlie@mail.com' }
];

describe('usersListUtils', () => {
  describe('filterUsersByAge', () => {
    it('should filter users by age range', () => {
      const result = filterUsersByAge(sampleUsers, 21, 30);
      expect(result).to.deep.equal([
        { id: 1, name: 'Alice', age: 25, email: 'alice@mail.com' },
        { id: 2, name: 'Bob', age: 30, email: 'bob@mail.com' }
      ]);
    });

    it('should throw an error for invalid input', () => {
      expect(() => filterUsersByAge({}, 20, 30)).to.throw();
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users alphabetically by name', () => {
      const result = sortUsersByName(sampleUsers);
      expect(result.map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    });

    it('should throw an error for invalid input', () => {
      expect(() => sortUsersByName('not an array')).to.throw();
    });
  });

  describe('findUserById', () => {
    it('should return the user with the given ID', () => {
      expect(findUserById(sampleUsers, 2)).to.deep.equal(sampleUsers[1]);
    });

    it('should return null if the user is not found', () => {
      expect(findUserById(sampleUsers, 999)).to.be.null;
    });

    it('should throw an error for invalid input', () => {
      expect(() => findUserById('invalid', 1)).to.throw();
    });
  });

  describe('isEmailTaken', () => {
    it('should return true if the email exists', () => {
      expect(isEmailTaken(sampleUsers, 'bob@mail.com')).to.be.true;
    });

    it('should return false if the email does not exist', () => {
      expect(isEmailTaken(sampleUsers, 'nobody@mail.com')).to.be.false;
    });

    it('should throw an error for invalid input', () => {
      expect(() => isEmailTaken(null, 'test@mail.com')).to.throw();
    });
  });
});