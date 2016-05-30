'use strict'

const Express = require('express')

const express = new Express()

express.set('json spaces', 2)

express.use(require('express-domain-middleware'))

express.get('/', require('routes/main'))

express.use(function (err, req, res, next) {
  res.status(500).send({
    error: err.message
  })
})

express.listen(8080, () => { console.log('listening 8080') })
