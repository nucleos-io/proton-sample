import controllers from 'proton-quark-controllers'
import models from 'proton-quark-models'
import mongoose from 'proton-quark-mongoose'
import policies from 'proton-quark-policies'
import router from 'proton-quark-routers'

// List of quarks used in the project
// To build your own quarks
// see: https://github.com/nucleos-io/proton-quark
export default [mongoose, models, controllers, policies, router]
