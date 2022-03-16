module.exports = {
	parser: '@babel/eslint-parser',
	extends: ['standard', 'prettier'],
	parserOptions: {
		requireConfigFile: false
	},
	rules: {
		'standard/computed-property-even-spacing': 'off',
		'standard/array-bracket-even-spacing': 'off',
		'standard/object-curly-even-spacing': 'off',
		'block-scoped-var': 'error',
		'dot-notation': 'error',
		'guard-for-in': 'error',
		'handle-callback-err': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-loop-func': 'error',
		'no-script-url': 'error',
		'no-tabs': 'off',
		'no-prototype-builtins': 'off',
		'no-restricted-imports': [
			'error',
			{ paths: [{ name: 'q', message: 'Use native Promises instead' }] },
		],
	},
};
