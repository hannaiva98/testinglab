module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        describe: 'readonly',
        it: 'readonly'
      }
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'constructor-super': 'off',
    }
  }
];