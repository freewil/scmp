var crypto = require('crypto')
var Benchmark = require('benchmark')

var scmpCompare = require('../lib/scmpCompare')
var compareFn = crypto.timingSafeEqual || scmpCompare

// `safe-buffer` in case `Buffer.from` in newer versions of node aren't available
var Buffer = require('safe-buffer').Buffer

var HASH1 = Buffer.from('e727d1464ae12436e899a726da5b2f11d8381b26', 'hex')
var HASH2 = Buffer.from('f727d1464ae12436e899a726da5b2f11d8381b26', 'hex')

var suite = new Benchmark.Suite()
suite.add('crypto check each fn call', function () {
  if (crypto.timingSafeEqual) {
    return crypto.timingSafeEqual(HASH1, HASH2)
  }
  return scmpCompare(HASH1, HASH2)
})
  .add('crypto check once', function () {
    return compareFn(HASH1, HASH2)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()
