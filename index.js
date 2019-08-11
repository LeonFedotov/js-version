const acorn = require('acorn')
const walk = require('acorn-walk')

const check = (code) =>
	walk.simple(acorn.parse(code), {
	  ArrowFunctionExpression() {
	  	throw new Error('Arrow function')
	  },

	  VariableDeclaration({ kind }) {
	  	if(kind == 'const' || kind == 'let') {
			throw new Error('Variable declaration')
		}
	  }
	})

module.exports = (code = code) => {
	try {
		check(code)
		return true
	} catch(err) {
		return false
	}
}
