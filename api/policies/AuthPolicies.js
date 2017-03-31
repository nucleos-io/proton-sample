import Policies from 'proton-policy'
import passport from 'koa-passport'
import LocalStrategy from '../strategies/LocalStrategy'
import BearerStrategy from '../strategies/BearerStrategy'


/**
 * @class AuthPolicies
 * @description This class define a set of policies that manage all the
 * authentication ways in the app
 * @author Luis Hernandez
 */
export default class AuthPolicies extends Policies {

  /**
   * @method password
   * @description This method is responsible of verify the username and password
   *  with `https://github.com/jaredhanson/passport-local` strategy
   * @author Carlos Marcano
   */
  async password(ctx, next) {
    passport.use(new LocalStrategy())
    const cb = async (e, accessToken) => {
      if (e || !accessToken) {
        const msg = '☹️  User or password invalid'
        proton.log.error(msg, e)
        ctx.response.status = 401
      } else {
        Object.assign(ctx.request, { accessToken })
        await next()
      }
    }
    await passport.authenticate('local', cb)(ctx, next)
  }

  /**
   * @method bearer
   * @description This method is responsible of verify the tokens that the
   * users sent
   * @author Luis Hernandez
   */
  async bearer(ctx, next) {
    passport.use(new BearerStrategy())
    const cb = async (e, auth) => {
      if (e || !auth) {
        const msg = '☹️  An error ocurred auth an user using a accessToken'
        proton.log.error(msg, e)
        ctx.response.status = 401
      } else {
        Object.assign(ctx.request, auth)
        await next()
      }
    }
    await passport.authenticate('bearer', cb)(ctx, next)
  }
}
