export default {

  // default store for models
  store: 'mongo',

  // stores available
  stores: {

    // store name
    mongo: {
      // the adapter is provided of the package `proton-quark-mongoose`
      // for all options
      // see: `https://github.com/nucleos-io/proton-quark-mongoose`
      // and `https://github.com/nucleos-io/proton-mongoose-model`
      connection: {
        uri: process.env.MONGO_URI || 'mongodb:27017',
      },
      adapter: 'mongoose',
    },

  },
}
