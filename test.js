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
  t.equal(
    trimLines('a \r b \r\n c \n d'),
    'a\rb\r\nc\nd',
    'should preseve line endings'
  )
  t.end()
})

test('efficiency', (t) => {
  const whitespace = ' '.repeat(70_000)

  t.test('whitespace in line', (t) => {
    const timeoutId = setTimeout(() => {
      t.fail('did not pass in 10ms')
    }, 10)

    t.deepEqual(trimLines('a' + whitespace + 'b'), 'a' + whitespace + 'b')

    setTimeout(() => {
      clearTimeout(timeoutId)
      t.end()
    }, 0)
  })

  t.test('flanking whitespace', (t) => {
    const timeoutId = setTimeout(() => {
      t.fail('did not pass in 10ms')
    }, 10)

    t.deepEqual(trimLines(whitespace + '\na\n' + whitespace), '\na\n')

    setTimeout(() => {
      clearTimeout(timeoutId)
      t.end()
    }, 0)
  })

  t.test('internalized whitespace ', (t) => {
    const timeoutId = setTimeout(() => {
      t.fail('did not pass in 30ms')
    }, 30)

    t.deepEqual(
      trimLines('\na' + whitespace + 'b\n'),
      '\na' + whitespace + 'b\n'
    )

    setTimeout(() => {
      clearTimeout(timeoutId)
      t.end()
    }, 0)
  })

  t.test('whitespace around line', (t) => {
    const timeoutId = setTimeout(() => {
      t.fail('did not pass in 10ms')
    }, 10)

    t.deepEqual(
      trimLines(
        'a' +
          whitespace +
          '\n' +
          whitespace +
          'b' +
          whitespace +
          '\n' +
          whitespace +
          'c'
      ),
      'a\nb\nc'
    )

    setTimeout(() => {
      clearTimeout(timeoutId)
      t.end()
    }, 0)
  })
})
