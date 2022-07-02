const SPACE = 32
const TAB = 9

/**
 * Remove initial and final spaces and tabs at the line breaks in `value`.
 * Does not trim initial and final spaces and tabs of the value itself.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Trimmed value.
 */
export function trimLines(value) {
  const source = String(value)
  const search = /\r?\n|\r/g
  let match = search.exec(source)
  let last = 0
  /** @type {Array<string>} */
  const lines = []

  while (match) {
    lines.push(
      trimLine(source.slice(last, match.index), last !== 0, true),
      match[0]
    )

    last = match.index + match[0].length
    match = search.exec(source)
  }

  lines.push(trimLine(source.slice(last), last !== 0, false))

  return lines.join('')
}

/**
 * @param {string} value
 * @param {boolean} start
 * @param {boolean} end
 * @returns {string}
 */
function trimLine(value, start, end) {
  let startIndex = 0
  let endIndex = value.length
  if (start) {
    let code = value.codePointAt(startIndex)

    while (code === SPACE || code === TAB) {
      startIndex++
      code = value.codePointAt(startIndex)
    }
  }

  if (end) {
    let code = value.codePointAt(endIndex - 1)

    while (code === SPACE || code === TAB) {
      endIndex--
      code = value.codePointAt(endIndex - 1)
    }
  }

  return endIndex > startIndex ? value.slice(startIndex, endIndex) : ''
}
