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