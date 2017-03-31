import local from 'passport-local'

const { Strategy } = local

/**
 * @class LocalStrategy
 * @description This class represents an auth strategy and is responsible of
 * verify the username and password
 * @author Carlos Marcano
 */
export default class LocalStrategy extends Strategy {

  constructor() {
    super({ session: false }, LocalStrategy.verify)
  }

  /**
   * @method verify
   * @description This method is the responsible of verify the username and password
   * @param {string} username
   * @param {string} password
   * @author Carlos Marcano
   */
  static async verify(username, password, done) {
    try {
      const user = await User.findOne({ username })
      if (!user) throw new Error('user not found')
      if (!user.validatePassword(password)) throw new Error('invalid password')
      const accessToken = await Token.generateAccessToken(user)
      done(null, accessToken)
    } catch (e) {
      done(e)
    }
  }
}
