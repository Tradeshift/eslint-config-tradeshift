const schemaObject = {
	type: 'object',
	properties: {
		functions: {
			type: 'object',
			properties: {},
			additionalProperties: false
		}
	},
	additionalProperties: false
};

module.exports = {
	meta: {
		docs: {
			description: 'disallow invalid translations',
			category: 'Possible Errors'
		},

		schema: {
			anyOf: [
				{
					type: 'array',
					items: [schemaObject],
					additionalItems: false
				}
			]
		}
	},
	create(context) {
		const functions = context.options.functions || {
			t: {
				arguments: [{ type: 'Literal' }, { type: 'ObjectExpression' }, { type: 'Literal' }],
				allowEmpty: false,
				validateArgs(args) {
					return typeof args[0].value === 'string';
				}
			}
		}

		return {
			CallExpression(call) {
				const fn = functions[call.callee.name];
				if (!fn) {
					return;
				}
				const callArgs = call.arguments;
				const validArgs = fn.arguments || [];

				if (!callArgs.length && !fn.allowEmpty) {
					return context.report({
						node: call.callee,
						message: 'Empty translations are not allowed'
					});
				}
				callArgs.forEach((arg, i) => {
					const valid = validArgs[i];

					const invalidKey = Object.keys(valid).find(k => arg[k] !== valid[k]);
					if (invalidKey) {
						context.report({
							node: call.callee,
							message: `Expected ${valid[invalidKey]}, got ${arg[invalidKey]}`
						});
					} else if(fn.validateArgs && !fn.validateArgs(callArgs)) {
						context.report({
							node: call.callee,
							message: `Invalid argument types for ${call.callee.name}`
						});
					}
				});
			}
		};
	}
};
