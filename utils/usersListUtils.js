function filterUsersByAge(users, minAge, maxAge) {
  if (!Array.isArray(users)) throw new Error('Users must be an array');
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
}

function sortUsersByName(users) {
  if (!Array.isArray(users)) throw new Error('Users must be an array');
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

function findUserById(users, id) {
  if (!Array.isArray(users)) throw new Error('Users must be an array');
  return users.find(user => user.id === id) || null;
}

function isEmailTaken(users, email) {
  if (!Array.isArray(users)) throw new Error('Users must be an array');
  return users.some(user => user.email === email);
}

module.exports = { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken };