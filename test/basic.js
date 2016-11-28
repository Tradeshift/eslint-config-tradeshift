var config = require('../');
var test = require('tape');

test('test basic properties of config', function(t) {
	t.ok(isString(config.extends));
	t.ok(isObject(config.rules));
	t.end();
});

function isObject(obj) {
	return typeof obj === 'object' && obj !== null;
}
function isString(str) {
	return typeof str === 'string' && str !== null;
}
