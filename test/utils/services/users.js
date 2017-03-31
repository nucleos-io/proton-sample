import hat from 'hat'
import Chance from 'chance'

const chance = new Chance()

class UserService {

  create(n) {
    const users = Array(...Array(n)).map(() => this.build())
    return User.create(users)
  }

  async tokenize(user) {
    const token = await Token.findOneAndUpdate(
      { user: user._id },
      { $setOnInsert: { value: hat(), user: user._id } },
      { new: true, upsert: true },
    )
    return token.value
  }

  build() {
    return {
      name: chance.name(),
      username: chance.email(),
      password: chance.word({ length: 10 }),
    }
  }

}

export default new UserService()
