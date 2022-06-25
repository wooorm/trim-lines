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

test('efficiency', (t) => {
  const aTonOfWhitespace = 'a' + ' '.repeat(70_000) + 'b'
  const timeoutId = setTimeout(() => {
    t.fail('should process lots of whitespace efficiently')
  }, 10)

  t.deepEqual(
    trimLines(aTonOfWhitespace),
    aTonOfWhitespace,
    'should be efficient on excessive whitespace'
  )

  setTimeout(() => {
    clearTimeout(timeoutId)
    t.end()
  }, 0)
})
