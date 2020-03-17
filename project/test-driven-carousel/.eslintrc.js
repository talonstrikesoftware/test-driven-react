module.exports = {
  plugins: ['react'],
  extends: [
    "eslint:recommended", 'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
};
