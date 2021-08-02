const _ = require('lodash')
const { validate } = require('uuid')

/**
 * Check value is valid UUID or not
 *
 * @param {*} value The value to check
 * @returns {*} Returns valid UUID
 */
const validUUID = (value) => {
  if (value == null) {
    return ''
  }

  if (_.isArray(value)) {
    const arr = value.map((item) => (validate(item) ? item : ''))
    const newArr = _.filter(arr)
    return _.isEmpty(newArr) ? '' : newArr
  }

  if (typeof value === 'string') {
    return validate(value) ? value : ''
  }
}

module.exports = validUUID;