var config = require('../');
var test = require('tape');

test('test basic properties of config', function(t) {
	t.ok(isArray(config.extends));
	t.ok(isObject(config.rules));
	t.end();
});

function isObject(obj) {
	return typeof obj === 'object' && obj !== null;
}
function isArray(arr) {
	return Array.isArray(arr);
}
