export function trimLines(value) {
  return String(value).replace(/[ \t]*\n+[ \t]*/g, '\n')
}
