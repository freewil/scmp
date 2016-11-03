# scmp
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/freewil/scmp.svg?branch=master
[travis-url]: https://travis-ci.org/freewil/scmp

[npm-image]: https://img.shields.io/npm/v/scmp.svg?style=flat
[npm-url]: https://npmjs.org/package/scmp

[downloads-image]: https://img.shields.io/npm/dm/scmp.svg?style=flat
[downloads-url]: https://npmjs.org/package/scmp

Safe, constant-time comparison of strings.

**NOTE**: If you're using Node.js, since v6.6.0, you should use [crypto.timingSafeEqual(a, b)](https://nodejs.org/dist/latest-v6.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b)

## Install

```
npm install scmp
```

## Why?

To minimize vulnerability against [timing attacks](http://codahale.com/a-lesson-in-timing-attacks/).

## Example

```js
const scmp = require('scmp');

const hash      = 'e727d1464ae12436e899a726da5b2f11d8381b26';
const givenHash = 'e727e1b80e448a213b392049888111e1779a52db';

if (scmp(hash, givenHash)) {
  console.log('good hash');
} else {
  console.log('bad hash');
}

```
