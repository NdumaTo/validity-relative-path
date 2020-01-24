module.exports = function isValid(value) {
  const test = value.startsWith('/') && /^https?:\/\/|^\/\//i.test(value)
  return test
}
