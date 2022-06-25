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
  return String(value).replace(/[ \t]*(\r?\n|\r)+[ \t]*/g, '$1')
}
