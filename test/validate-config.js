var eslint = require('eslint');
var test = require('tape');

test('load config in eslint to validate all rule syntax is correct', function(t) {
	var CLIEngine = eslint.CLIEngine;

	var cli = new CLIEngine({
		useEslintrc: false,
		configFile: '.eslintrc.json'
	});

	var code = `
	var foo = 1;
	var bar = function() {};
	bar(foo);

	class MyClass {
		static propTypes = {}
	}
	bar(new MyClass());
	`;

	t.deepEqual(cli.executeOnText(code).results[0].messages, []);
	t.end();
});
