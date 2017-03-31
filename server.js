require('babel-polyfill')
require('babel-core/register')

const parser = require('koa-bodyparser')
const passport = require('koa-passport')
const Proton = require('proton-koa')

const app = new Proton({ path: __dirname })

app.use(parser())
app.use(passport.initialize())

module.exports = app.start()
