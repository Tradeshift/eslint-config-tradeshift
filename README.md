# Tradeshift - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/Tradeshift/eslint-config-tradeshift/master.svg
[travis-url]: https://travis-ci.org/Tradeshift/eslint-config-tradeshift
[npm-image]: https://img.shields.io/npm/v/eslint-config-tradeshift.svg
[npm-url]: https://npmjs.org/package/eslint-config-tradeshift
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-tradeshift.svg
[downloads-url]: https://npmjs.org/package/eslint-config-tradeshift

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Tradeshift Style](http://apps.tradeshift.com)

## Install

```bash
npm install eslint-config-tradeshift
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Tradeshift Style shareable config, first run this:

```bash
npm install eslint-config-tradeshift eslint-config-standard eslint-plugin-standard eslint-plugin-promise
```

Then, add this to your .eslintrc file:

```
{
	"extends": "tradeshift"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

ISC. Copyright (c) 2016, [Tradeshift](https://github.com/Tradeshift).
