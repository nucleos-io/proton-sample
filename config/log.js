import winston from 'winston'

// The logger used is winston
// see: `https://github.com/winstonjs/winston`

const defaultTransport = new winston.transports.Console({
  prettyPrint: true,
  colorize: true,
  json: false,
})
const options = {
  level: 'debug',
  exitOnError: false,
  transports: [defaultTransport],
}
const logger = new winston.Logger(options)

export default logger
