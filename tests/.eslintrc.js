module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  extends: 'rtablada',
  env: {
    'embertest': true
  },
  globals: {
    server: true
  }
};
