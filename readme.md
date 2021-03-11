# trim-lines

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Remove spaces and tabs around line breaks.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install trim-lines
```

## Use

```js
import {trimLines} from 'trim-lines'

trimLines(' foo\t\n\n bar \n\tbaz ') // => ' foo\nbar\nbaz '
```

## API

This package exports the following identifiers: `trimLines`.
There is no default export.

### `trimLines(value)`

Remove initial and final spaces and tabs at the line breaks in `value`
(`string`).
Does not trim initial and final spaces and tabs of the value itself.
Returns the trimmed value.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/trim-lines/workflows/main/badge.svg

[build]: https://github.com/wooorm/trim-lines/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/trim-lines.svg

[coverage]: https://codecov.io/github/wooorm/trim-lines

[downloads-badge]: https://img.shields.io/npm/dm/trim-lines.svg

[downloads]: https://www.npmjs.com/package/trim-lines

[size-badge]: https://img.shields.io/bundlephobia/minzip/trim-lines.svg

[size]: https://bundlephobia.com/result?p=trim-lines

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
