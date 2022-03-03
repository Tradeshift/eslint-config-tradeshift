module.exports = {
	plugins: ['jest'],
	rules: {
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/valid-expect': 'error',
		'jest/no-alias-methods': 'off',
		'jest/no-jest-import': 'error',
		'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
		'jest/no-test-prefixes': 'error',
		'jest/prefer-to-contain': 'warn',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-describe-callback': 'error',
		'jest/valid-expect-in-promise': 'error',
		'jest/consistent-test-it': 'off',
		'jest/lowercase-name': 'off',
		'jest/no-hooks': 'off',
		'jest/no-jasmine-globals': 'off',
		'jest/no-test-callback': 'off',
		'jest/prefer-expect-assertions': 'off',
		'jest/prefer-to-be-null': 'off',
		'jest/prefer-to-be-undefined': 'off',
		'jest/require-tothrow-message': 'off',
		'jest/expect-expect': 'off',
		'jest/no-test-return-statement': 'off',
		'jest/prefer-inline-snapshots': 'off',
		'jest/prefer-strict-equal': 'off',
		'jest/prefer-spy-on': 'off',
		'jest/prefer-todo': 'warn',
		'jest/prefer-called-with': 'error',
		'jest/no-truthy-falsy': 'off',
		'jest/valid-title': 'error',
		'jest/no-mocks-import': 'error',
		'jest/no-commented-out-tests': 'warn',
		'jest/no-duplicate-hooks': 'off',
		'jest/no-expect-resolves': 'off',
		'jest/no-export': 'error',
		'jest/no-if': 'error',
		'jest/no-standalone-expect': 'off',
		'jest/no-conditional-expect': 'error',
		'jest/require-top-level-describe': 'off',
		'jest/prefer-hooks-on-top': 'error'
	},
	env: {
		'jest/globals': true
	}
};
