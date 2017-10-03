const configuration_file = process.env.CONFIG_PATH || '../config.dev.json'

module.exports = require(__dirname + '/' + configuration_file)