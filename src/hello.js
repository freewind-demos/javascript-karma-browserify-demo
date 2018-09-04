const _ = require('lodash')

module.exports = function (name) {
    return 'Hello, ' + _.capitalize(name) + '!'
}