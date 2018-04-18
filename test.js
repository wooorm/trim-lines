'use strict';

var test = require('tape');
var trimLines = require('.');

test('trimLines(value)', function (t) {
  t.equal(trimLines(true), 'true', 'should coerce to string');
  t.equal(trimLines(' foo\t\n\n bar \n\tbaz '), ' foo\nbar\nbaz ', 'should work');
  t.end();
});
