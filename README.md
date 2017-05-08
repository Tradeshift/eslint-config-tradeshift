# Tradeshift - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![peerDependencies][peerdeps-image]][peerdeps-url]

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

```bash
npm install eslint-config-tradeshift
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Tradeshift Style shareable config, you'll need `eslint-config-tradeshift`, `eslint-config-prettier`, `eslint-config-standard`, `eslint-plugin-import`, `eslint-plugin-node`, `eslint-plugin-promise` and `eslint-plugin-standard`.


1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-tradeshift@latest" peerDependencies
  ```

  Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-tradeshift;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install  --save-dev eslint-config-tradeshift eslint-config-prettier@^#.#.# eslint-config-standard@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-promise@^#.#.# eslint-plugin-standard@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-tradeshift
  ```

  The cli will produce and run a command like:

  ```sh
  npm install  --save-dev eslint-config-tradeshift eslint-config-prettier@^#.#.# eslint-config-standard@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-promise@^#.#.# eslint-plugin-standard@^#.#.#
    ```

2. Add `"extends": "tradeshift"` to your .eslintrc


*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Thanks

Thanks to @sqren for starting this project!

## License

ISC. Copyright (c) 2016, [Tradeshift](https://github.com/Tradeshift).
