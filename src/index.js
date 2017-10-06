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
	try {
		context.callbackWaitsForEmptyEventLoop = false
		
		if (!event.body) throw new Error('Unexpected JSON Schema.')

		const body = util.bodyJSONParser(event.body)

		// TODO implement

		util.response(200, {}, config, callback)

	} catch (err) {
		util.response(500, {}, {
			error: err.message,
		}, callback)
	}
}

exports.handler = handler