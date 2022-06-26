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
      trimLine(source.slice(last, match.index), last === 0, false),
      match[0]
    )

    last = match.index + match[0].length
    match = search.exec(source)
  }

  lines.push(trimLine(source.slice(last), last === 0, true))

  return lines.join('')
}

/**
 * @param {string} value
 * @param {boolean} start
 * @param {boolean} end
 * @returns {string}
 */
function trimLine(value, start, end) {
  if (!start) {
    value = value.replace(/^[ \t]+/, '')
  }

  if (!end) {
    const regex = /[ \t]/
    let i = value.length
    while (regex.test(value.charAt(--i)));
    return value.slice(0, i + 1)
  }

  return value
}
