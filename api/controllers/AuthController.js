import Controller from 'proton-controller'

/**
 * @class AuthController
 * @author Carlos Marcano
 */
export default class AuthController extends Controller {

  auth(ctx) {
    const { response, request: { accessToken } } = ctx
    response.status = 200
    response.body = { accessToken }
  }

}
