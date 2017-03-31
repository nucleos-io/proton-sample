import Router from 'koa-router'

const router = new Router({ prefix: '/users' })
const { AuthPolicies } = proton.app.policies
const { UserController } = proton.app.controllers

router.get('/', UserController.find)
router.get('/me', AuthPolicies.bearer, UserController.me)

module.exports = router
