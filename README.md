# Tradeshift - ESLint Shareable Config

[![Greenkeeper badge](https://badges.greenkeeper.io/Tradeshift/eslint-config-tradeshift.svg)](https://greenkeeper.io/)

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![peerDependencies][peerdeps-image]][peerdeps-url]

[![semantic-release][semantic-release-img]][semantic-release-url]
[![Commitizen friendly][commitizen-friendly-img]][commitizen-friendly-url]


[commitizen-friendly-img]:
https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-friendly-url]:
http://commitizen.github.io/cz-cli/
[semantic-release-img]:
https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:
https://github.com/semantic-release/semantic-release
[travis-image]: https://travis-ci.org/Tradeshift/eslint-config-tradeshift.svg?branch=master
[travis-url]: https://travis-ci.org/Tradeshift/eslint-config-tradeshift
[npm-image]: https://img.shields.io/npm/v/eslint-config-tradeshift.svg
[npm-url]: https://npmjs.org/package/eslint-config-tradeshift
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-tradeshift.svg
[downloads-url]: https://npmjs.org/package/eslint-config-tradeshift
[peerdeps-url]: https://david-dm.org/Tradeshift/eslint-config-tradeshift?type=peer
[peerdeps-image]: https://david-dm.org/Tradeshift/eslint-config-tradeshift/peer-status.svg

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Tradeshift Style](http://apps.tradeshift.com)

## Install

Install eslint-config-tradeshift:

```
$ npm install --save-dev eslint-config-tradeshift
```

Then, add eslint-config-tradeshift to the "extends" array in your `.eslintrc.*`
file. Make sure to put it **last,** so it gets the chance to override other
configs.

```json
{
  "extends": [
    "tradeshift"
  ]
}
```

## Thanks

Thanks to @sqren for starting this project!

## License

ISC. Copyright (c) 2018, [Tradeshift](https://github.com/Tradeshift).
