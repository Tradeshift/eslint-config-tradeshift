module.exports = {
	parser: 'babel-eslint',
	extends: ['standard', 'prettier'],
	rules: {
		'block-scoped-var': 'error',
		'dot-notation': 'error',
		'guard-for-in': 'error',
		'handle-callback-err': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-loop-func': 'error',
		'no-script-url': 'error',
		'no-tabs': 'off',
		'standard/computed-property-even-spacing': 'off',
		'standard/array-bracket-even-spacing': 'off',
		'standard/object-curly-even-spacing': 'off',
		'no-restricted-imports': [
			'error',
			{ paths: [{ name: 'q', message: 'Use native Promises instead' }] }
		]
	}
};
