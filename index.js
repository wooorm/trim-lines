'use strict'

module.exports = trimLines

function trimLines(value) {
  return String(value).replace(/[ \t]*\n+[ \t]*/g, '\n')
}
