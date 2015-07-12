// Dependencies.
var trimLines = require('./index.js');

// Trim line-breaks:
var result = trimLines(' foo\t\n\n bar \n\tbaz ');

// Yields:
console.log('text', result);
