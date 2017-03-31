import Model from 'proton-mongoose-model'

/**
 * @class User
 * @author Carlos Marcano
 */
export default class User extends Model {

  schema() {
    return {
      name: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
    }
  }

  validatePassword(password) {
    return password === this.password
  }

}
