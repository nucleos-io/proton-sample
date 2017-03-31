import bearer from 'passport-http-bearer'

const { Strategy } = bearer

/**
 * @class BearerStrategy
 * @description This class represents an auth strategy and is responsible of
 * verify the accessTokens sended by the users
 * @author Luis Hernadnez
 */
export default class BearerStrategy extends Strategy {

  constructor() {
    super(BearerStrategy.verify)
  }

  /**
   * @method verify
   * @description This method is the responsible of verify the tokens of the
   * users
   * @param {string} accessToken is a bearer access token
   * @author Carlos Marcano
   */
  static async verify(accessToken, done) {
    try {
      const token = await Token.findOne({ value: accessToken })
      if (!token) {
        const msg = `☹️  The token ${accessToken} not exist in the DB`
        throw new Error(msg)
      }
      const user = await User.findById(token.user)
      done(null, { user, accessToken })
    } catch (e) {
      done(e)
    }
  }
}
