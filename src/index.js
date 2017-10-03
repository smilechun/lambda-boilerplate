const config = require('./config')
const util = require('./util')

/**
 * Lambda entry point
 * @param  {Object}   event    AWS Event Object
 * @param  {Object}   context  AWS Context Object
 * @param  {Function} callback AWS Callback Function
 * @return {Void}              No return
 */
function handler(event, context, callback) {
	// TODO implement
	util.response(200, {}, config, callback)
}

exports.handler = handler