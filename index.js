const acorn = require('acorn')
const walk = require('acorn-walk')

const check = (code, ecmaVersion) =>
	walk.simple(acorn.parse(code, {ecmaVersion}), {})

module.exports = (code = code, ecmaVersion = 5) => {
	try {
		check(code, ecmaVersion)
		return true
	} catch(err) {
		return false
	}
}
