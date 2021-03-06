module.exports = {
  'env': {
    'browser': false,
    'node': true,
    'es6': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'semi' : [2, 'always'],
    'no-unused-vars': 'off'
  }
}
