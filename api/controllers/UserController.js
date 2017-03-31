import Controller from 'proton-controller'

/**
 * @class UserController
 * @author Luis Hernandez
 */
export default class UserController extends Controller {

  /**
   * @method find
   * @author Luis Hernandez
   */
  async find({ response }) {
    try {
      response.body = await User.find()
    } catch (e) {
      proton.log.error('😫 An error ocurred finding a list of users', e)
      response.status = 400
      response.body = { message: e.message }
    }
  }

  /**
   * @method me
   * @description This method allow to the users consult his own information
   * @author Luis Hernandez
   */
  async me(ctx) {
    try {
      ctx.response.body = await User.findById(ctx.request.user._id)
      ctx.response.status = 200
    } catch (e) {
      proton.log.error(`😫 An error ocurred when ${ctx.request.user.username} try to get his own information`, e)
      ctx.response.status = 400
      ctx.response.body = { message: e.message }
    }
  }
}
