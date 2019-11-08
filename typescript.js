module.exports = {
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				},

				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true
			},
			plugins: ['@typescript-eslint'],
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
				// TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
				'default-case': 'off',
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
				'no-dupe-class-members': 'off',
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
				'no-undef': 'off',

				// Add TypeScript specific rules (and turn off ESLint equivalents)
				'@typescript-eslint/consistent-type-assertions': 'warn',
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'warn',
				'@typescript-eslint/no-namespace': 'error',
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [
					'warn',
					{
						functions: false,
						classes: false,
						variables: false,
						typedefs: false
					}
				],
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						args: 'none',
						ignoreRestSiblings: true
					}
				],
				'no-useless-constructor': 'off',
				'@typescript-eslint/no-useless-constructor': 'warn'
			}
		}
	]
};
