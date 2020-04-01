module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018
  },

  env: {
    node: true,
    es6: true,
    mocha: true
  },

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },

  extends: [
    'standard',
    'plugin:flowtype/recommended'
  ],

  plugins: [
    'flowtype'
  ],

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],

    // change default indent behaviour
    'indent': 'off',
    'indent-legacy': ['error', 2]
  }
}
