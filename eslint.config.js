const globals = require('globals');
const airbnbBase = require('eslint-config-airbnb-base');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // Поддержка Jest
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
      'quotes': ['error', 'single'], // Требовать одинарные кавычки
      'semi': ['error', 'always'],   // Требовать точки с запятой
      'no-console': 'warn',          // Предупреждение на console.log
    },
  },
];