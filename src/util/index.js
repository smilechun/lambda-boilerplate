/**
 * Parse Body to JSON Object
 * @param  {String} body   Body String
 * @return {Object}        Return Parsed JSON Objct
 */
function bodyJSONParser(body) {
	if (typeof body == 'string') 
		body = JSON.parse(body)
	return body
}

/**
 * HTTP Response Helper for AWS Lambda
 * @param  {Integer}   statusCode  Response Status Code
 * @param  {Object}    header      Response Header
 * @param  {Object}    body        Response Body
 * @param  {Function}  callback    AWS Callback Function
 * @return {Void}              	   No Return
 */
function response(statusCode, header, body, callback) {
	var reply = {
		statusCode: statusCode,
		body: JSON.stringify(body),
		headers: header,
	}

	callback(null, reply)
}

exports.response = response
exports.bodyJSONParser = bodyJSONParser