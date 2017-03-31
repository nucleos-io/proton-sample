import supertest from 'supertest'
import app from '../../server'
import Utils from '../utils'

describe('- User Controller', () => {
  let server = {}
  let request = {}
  let accessToken = {}

  before(async () => {
    try {
      server = await app
      request = supertest(server)
      const [user] = await Utils.users.create(1)
      accessToken = await Utils.users.tokenize(user)
    } catch (e) {
      proton.log.error(e)
    }
  })

  it('Should get his own information', async () => {
    const { body } = await request
      .get('/users/me')
      .set('authorization', `Bearer ${accessToken}`)
      .expect(200)
  })

  it('Should get a list of users', async () => {
    const { body } = await request
      .get('/users')
      .expect(200)
  })
})
