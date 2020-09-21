const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Change null to empty string -- required by validator
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email Validation
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Password Validation
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  // Return errors object and isValid boolean
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
