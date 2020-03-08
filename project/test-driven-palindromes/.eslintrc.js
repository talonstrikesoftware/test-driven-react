module.exports = {
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  }
};
