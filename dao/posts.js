'use strict'

const rp = require('request-promise')

const options = {
  uri: 'http://jsonplaceholder.typicode.com/posts/1',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
}

module.exports.getPost = () => rp(options)
