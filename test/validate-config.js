const { ESLint } = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', async function(t) {
	const eslint = new ESLint({
		useEslintrc: false,
		baseConfig: {
			extends: [
				require.resolve('../'),
				require.resolve('../jest'),
				require.resolve('../typescript')
			]
		}
	});

	const code = `
	const foo = 1;
	const bar = function() {};
	bar(foo);

	class MyClass {
		static propTypes = {}
	}
	bar(new MyClass());
	`;

	const resultsJS = await eslint.lintText(code, { filePath: 'config.js' });
	const resultsTS = await eslint.lintText(code, { filePath: 'config.ts' });

	t.deepEqual(resultsJS[0].messages, []);
	t.deepEqual(resultsTS[0].messages, []);
	t.end();
});
