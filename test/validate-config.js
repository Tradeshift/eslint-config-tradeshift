var eslint = require('eslint');
var test = require('tape');

test('load config in eslint to validate all rule syntax is correct', function(t) {
	var CLIEngine = eslint.CLIEngine;

	var cli = new CLIEngine({
		useEslintrc: false,
		baseConfig: {
			extends: [
				require.resolve('../'),
				require.resolve('../jest'),
				require.resolve('../typescript')
			]
		}
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

	t.deepEqual(cli.executeOnText(code, 'config.js').results[0].messages, []);
	t.deepEqual(cli.executeOnText(code, 'config.ts').results[0].messages, []);
	t.end();
});
