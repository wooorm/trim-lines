import test from 'tape'
import {trimLines} from './index.js'

test('trimLines(value)', function (t) {
  // @ts-expect-error coerce.
  t.equal(trimLines(true), 'true', 'should coerce to string')
  t.equal(
    trimLines(' foo\t\n\n bar \n\tbaz '),
    ' foo\n\nbar\nbaz ',
    'should work'
  )
  t.end()
})
