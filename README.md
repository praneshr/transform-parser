# transform-parser

A small utility to parse and stringify css transform strings.

## Install

```bash
npm i transform-parser

# or

yarn add transform-parser
```

## Usage

```javascript
import { parse, stringify } from 'transform-parser';
const transformString =
	'translate3d(10px, 40px, 24px) scale3d(1.1, 1.1, 1.1) perspective(20px)';

parse(transformString);
// => {translate3d: [10, 40, 24], scale3d(1.1, 1.1, 1.1), perspective: 20}

const transformObject = {
  rotate3d: [1, 2.0, 3.0, '10deg'],
  scale3d(1.1, 1.1, 1.1),
  skewX: '30deg',
}

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
