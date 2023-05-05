module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    'no-return-assign': 'error',
    'no-restricted-modules': [
      'error',
      {
        paths: ['foo-module', 'bar-module'],
        patterns: ['foo-module/private/*', 'bar-module/*', '!baz-module/good']
      }
    ],
    'no-console': 'error'
  }
}
