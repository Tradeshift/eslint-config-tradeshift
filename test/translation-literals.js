const eslint = require('eslint');
const test = require('tape');
const rule = require('../src/rules/translation-literals');

const RuleTester = eslint.RuleTester;

RuleTester.describe = function(text, method) {
	RuleTester.it.title = text;
	return method.call(this);
};

RuleTester.it = function(text, method) {
	test('translation-literals: ' + RuleTester.it.title + ': ' + text, t => {
		method();
		t.end();
	});
};

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run('translation-literals', rule, {
	valid: [
		{
			code: 't("I have {count} oranges", { count: 2 });'
		}
	],

	invalid: [
		{
			code: 't(`I have ${count} oranges`);', // eslint-ignore
			errors: [{ message: 'Expected Literal, got TemplateLiteral' }]
		},
		{
			code: 't(variable);',
			errors: [{ message: 'Expected Literal, got Identifier' }]
		}
	]
});
