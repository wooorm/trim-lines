'use strict';

/* eslint-env mocha */

var assert = require('assert');
var trimLines = require('./');

describe('trimLines(value)', function () {
  it('should coerce to string', function () {
    assert.equal(trimLines(true), 'true');
  });

  it('should work', function () {
    assert.equal(trimLines(' foo\t\n\n bar \n\tbaz '), ' foo\nbar\nbaz ');
  });
});
