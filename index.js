'use strict';

module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  extends: 'eslint:recommended',
  rules: {
    // Possible Errors
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
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error','functions' ],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-spare-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'warn',
    'valid-typeof': 'error',

    // Best Practices
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'off',
    'array-callback-return': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-scoped-var': 'off',
    'block-spacing': 'off',
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'callback-return': 'error',
    'camelcase': 'off',
    'comma-spacing': 'off',
    'comma-style': [
      'error',
      'last'
    ],
    'complexity': 'error',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'curly': 'error',
    'default-case': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': [
      'error',
      {
        'allowKeywords': true
      }
    ],
    'eol-last': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'generator-star-spacing': 'error',
    'global-require': 'off',
    'guard-for-in': 'error',
    'handle-callback-err': 'off',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'indent': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'comma-dangle': [
      'error',
      'only-multiline',
    ],
    'lines-around-comment': 'off',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'new-parens': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'error',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': true
      }
    ],
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-var': 'off',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': [
      'error',
      {
        'allowMultiplePropertiesPerLine': true
      }
    ],
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': 'off',
    'quotes': 'off',
    'radix': 'off',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi': 'off',
    'semi-spacing': 'off',
    'sort-imports': 'error',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'off',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always'
    ],
    'strict': 'off',
    'template-curly-spacing': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'vars-on-top': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'error',
    'yoda': 'off'
  }
};
