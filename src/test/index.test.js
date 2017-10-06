const should = require('should')
const config = require('../config')
const index = require('../index')

describe('Unit Test - index.js', _ => {
	describe('Test to success', _ => {
		describe('handler()', _ => {
			it('should return config file content', done => {
				index.handler({
					body: {}
				}, {}, (err, response) => {
					response.should.have.properties([
						'statusCode',
						'body',
						'headers'
					])
					done()
				})
			}).timeout(5000)
		})
	})
})