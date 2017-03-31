import Router from 'koa-router'

const router = new Router({ prefix: '/auth' })
const { AuthPolicies } = proton.app.policies
const { AuthController } = proton.app.controllers

router.post('/', AuthPolicies.password, AuthController.auth)

module.exports = router
