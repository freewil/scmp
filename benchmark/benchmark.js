var Benchmark = require('benchmark')
var scmp = require('../')

// `safe-buffer` in case `Buffer.from` in newer versions of node aren't available
var Buffer = require('safe-buffer').Buffer

var HASH1 = Buffer.from('e727d1464ae12436e899a726da5b2f11d8381b26', 'hex')
var HASH2 = Buffer.from('f727d1464ae12436e899a726da5b2f11d8381b26', 'hex')

var suite = new Benchmark.Suite()
suite.add('short-circuit compares', function () {
  HASH1 === HASH2
})
  .add('scmp compares', function () {
    scmp(HASH1, HASH2)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()
