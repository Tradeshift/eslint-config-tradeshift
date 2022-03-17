const { ESLint } = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', async function (t) {
	const eslint = new ESLint({
		useEslintrc: false,
		baseConfig: {
			extends: [
				require.resolve('../'),
				require.resolve('../jest'),
				require.resolve('../typescript'),
			],
		},
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

test('check for JSX support', async function (t) {
	const eslint = new ESLint({
		useEslintrc: false,
		baseConfig: {
			extends: [require.resolve('../'), require.resolve('../typescript')],
		},
	});

	const code = `
export const AwesomeJSX = () => (
	<section className="jsx-section">
		woop
	</section>
);
`;

	const resultsJS = await eslint.lintText(code, { filePath: 'index.js' });
	t.deepEqual(resultsJS[0].messages, [], 'Should parse JSX in *.js');
	const resultsJSX = await eslint.lintText(code, { filePath: 'index.jsx' });
	t.deepEqual(resultsJSX[0].messages, [], 'Should parse JSX in *.jsx');
	// Note: typescript conventions dont allow JSX in *.ts files
	const resultsTSX = await eslint.lintText(code, { filePath: 'index.tsx' });
	t.deepEqual(resultsTSX[0].messages, [], 'Should parse JSX in *.tsx');

	t.end();
});
