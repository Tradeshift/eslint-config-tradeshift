# eslint-config-tradeshift

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Tradeshift

## Install

```
$ npm install --save-dev eslint eslint-config-tradeshift
```


## Usage

Update `package.json` with:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^3.5.0",
		"eslint-config-tradeshift": "^1.0.0"
	},
	"eslintConfig": {
		"extends": "tradeshift"
	}
}
```

Then lint with `$ npm run lint`.
