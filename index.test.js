const check = require('./index')

const code = `
  var a = 5
  const b = 3
  let arrowFunction = (arrow) => console.log(arrow)
  async function scope() {
    return (arrow) => void 0
  }
`
test('api', () => {
  expect(check('const a = 5', 'aaa', 5)).not.toBe(true)
  expect(check('var a = 5', 'bbb', 5)).toBe(true)
})

test('javascript version - es6', () => expect(code).not.toBeOfVersion(5))
test('javascript version - const', () => expect('const a = 5').not.toBeOfVersion(5))
test('javascript version - 5', () => expect('var a = 5').toBeOfVersion(5))
