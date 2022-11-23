import assert from 'node:assert/strict'
import test from 'node:test'
import {trimLines} from './index.js'

test('trimLines(value)', function () {
  // @ts-expect-error coerce.
  assert.equal(trimLines(true), 'true', 'should coerce to string')
  assert.equal(
    trimLines(' foo\t\n\n bar \n\tbaz '),
    ' foo\n\nbar\nbaz ',
    'should work'
  )
  assert.equal(
    trimLines('a \r b \r\n c \n d'),
    'a\rb\r\nc\nd',
    'should preseve line endings'
  )
  assert.equal(
    trimLines(' \n \n \n '),
    '\n\n\n',
    'should handle complete empty space'
  )
})

test('performance', async () => {
  const whitespace = ' '.repeat(70_000)

  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      assert.fail('did not pass in 30ms')
    }, 30)

    assert.equal(
      trimLines('a' + whitespace + 'b'),
      'a' + whitespace + 'b',
      'whitespace in line (1)'
    )

    setTimeout(() => {
      clearTimeout(timer)
      resolve(undefined)
    }, 0)
  })

  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      assert.fail('did not pass in 30ms')
    }, 30)

    assert.equal(
      trimLines('\na' + whitespace + 'b\n'),
      '\na' + whitespace + 'b\n',
      'whitespace in line (2)'
    )

    setTimeout(() => {
      clearTimeout(timer)
      resolve(undefined)
    }, 0)
  })

  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      assert.fail('did not pass in 30ms')
    }, 30)

    assert.equal(
      trimLines(whitespace + '\na\n' + whitespace),
      '\na\n',
      'whitespace-only lines'
    )

    setTimeout(() => {
      clearTimeout(timer)
      resolve(undefined)
    }, 0)
  })

  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      assert.fail('did not pass in 30ms')
    }, 30)

    assert.equal(
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
      'a\nb\nc',
      'whitespace around line endings'
    )

    setTimeout(() => {
      clearTimeout(timer)
      resolve(undefined)
    }, 0)
  })
})
