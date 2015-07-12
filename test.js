'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var trimLines = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('trimLines(value)', function () {
    it('should coerce to string', function () {
        assert.equal(trimLines(true), 'true');
    });

    it('should work', function () {
        assert.equal(trimLines(' foo\t\n\n bar \n\tbaz '), ' foo\nbar\nbaz ');
    });
});
