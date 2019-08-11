const acorn = require('acorn')

const check = (code, ecmaVersion) => acorn.parse(code, {ecmaVersion})

module.exports = (code, ecmaVersion = 5) => {
  try {
    check(code, ecmaVersion)
    return true
  } catch(err) {
    return false
  }
}
