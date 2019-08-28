# Transform Parser

A small utility which converts css transform string to an object and vice versa.

## Install

```bash
npm i transform-parser

# or

yarn add transform-parser
```

You can also add`transform-parser` directly to your webpage and use it. The package will be available
under `window.transform`.

```html
<script src="https://unpkg.com/transform-parser"></script>
```

## Usage

Like React, the default unit is px(pixel). When a number is passed as value, it will be suffixed
with `px` and vice verse. Of course, the substitution will be skipped for transforms which requires
numeral values, like `scale3d()`.

```javascript
import { parse, stringify } from 'transform-parser';
const transformString =
	'translate3d(10px, 40px, 24px) scale3d(1.1, 1.1, 1.1) perspective(20px)';

parse(transformString);
// => {translate3d: [10, 40, 24], scale3d(1.1, 1.1, 1.1), perspective: 20}

const transformObject = {
	rotate3d: [1, 2.0, 3.0, '10deg'],
	scale3d: [1.1, 1.1, 1.1],
	skewX: '30deg',
};

stringify(transformObject);
// => 'rotate3d(1, 2.0, 3.0, 10deg) scale3d(1.1, 1.1, 1.1) skewX(30deg)'
```

## Local Development

```bash
yarn install
yarn build
yarn test
```

## License

MIT
