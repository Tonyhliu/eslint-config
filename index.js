module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'rules': {
    // basic syntax
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      }
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    
    // errors
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    
    // best practices
    'array-callback-return': 'error',
    'curly': 'error',
    'eqeqeq': 'error',
    'no-case-declarations': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-multi-spaces': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'yoda': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-unused-vars': 'error',
    
    // style
    'block-spacing': 'error',
    'brace-style': 'error',
    'func-call-spacing': 'error',
    'func-names': 'error',
    'key-spacing': 'error',
    'no-multiple-empty-lines': 'error',
    'object-property-newline': 'error',
    'no-unneeded-ternary': 'error',
    'padded-blocks': [
      'error',
      'never',
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'spaced-comment': 'error',
    
    // ES6
    'arrow-parens': 'error',
    'constructor-super': 'error',
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
  }
};