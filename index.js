const validity = require('validity'),
  isValid = require('./lib/relative-path-validator')

module.exports = validity.createValidatorAllowingFailureMessageOverride(isValid)
