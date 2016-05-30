'use strict'

const wrap = require('co-express')

const comments = require('dao/comments')
const posts = require('dao/posts')

module.exports = wrap(function * (req, res) {
  const post = yield posts.getPost()

  const comment = yield comments.getComment()

  res.status(200).send({
    post: post,
    comment: comment
  })
})
