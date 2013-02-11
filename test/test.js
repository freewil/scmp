var scmp = require('../');
var assert = require('assert');

describe('scmp', function() {
  it('should return true for identical strings', function() {
    assert(scmp('a', 'a'));
    assert(scmp('abc', 'abc'));
  });
  
  it('should return false for non-identical strings', function() {
    assert.ifError(scmp('a', 'b'));
    assert.ifError(scmp('abc', 'b'));
  });
});
