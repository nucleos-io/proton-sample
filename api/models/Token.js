import Model from 'proton-mongoose-model'
import hat from 'hat'

/**
 * @class Token
 * @author Luis Hernandez
 */
export default class Token extends Model {

  schema() {
    return {
      user: { type: Model.types.ObjectId, ref: 'User', required: true },
      value: { type: String, required: true, unique: true },
    }
  }

  static async generateAccessToken(user) {
    const token = new this({ user: user._id, value: hat() })
    await token.save()
    return token.value
  }

  static findByUserOrCreate(user) {
    return this.findOneAndUpdate(
      { user },
      { setDefaultsOnInsert: { user, value: hat() } },
      { upsert: true, new: true },
    )
  }

}
