const acorn = require('acorn')
const walk = require('acorn-walk')

const check = (code) =>
	walk.simple(acorn.parse(code, {ecmaVersion: 5}), {})

module.exports = (code = code) => {
	try {
		check(code)
		return true
	} catch(err) {
		return false
	}
}
