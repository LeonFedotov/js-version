const check = require('./index')

const code = `
	var a = 5
	const b = 3
	let arrowFunction = (arrow) => console.log(arrow)



	async function scope() {
		return (arrow) => void 0
	}

`

console.log('Checking:', code, 'Res:', check(code))
console.log('Checking:', `var a = 5`, 'Res:', check(`var a = 5`))
