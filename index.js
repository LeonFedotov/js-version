const acorn = require('acorn')
const { codeFrameColumns } = require('@babel/code-frame')

let unique = 1
const cache = {}

const check = (source, key = unique++, ecmaVersion = 5) => {
  if(!cache[key]) {
    try {
      acorn.parse(source, {ecmaVersion})
      cache[key] = true
    } catch(error) {
      cache[key] = {message: error.message, loc: error.loc}
    }
  }
  return cache[key]
}

expect.extend({
  toBeOfVersion(source, ecmaVersion = 5, showCode = false) {
    try {
      acorn.parse(source, {ecmaVersion})
      return {
        pass: true,
        message: () => this.isNot ? `fail` : `Js matches provided version: ${ecmaVersion}`
      }
    } catch(error) {
      return {
        pass: false,
        message: () => this.isNot ? 'fail' : showCode ? codeFrameColumns(source, { start: { line: error.loc.line, column: error.loc.column+1 }}, { highlightCode: true, message: error }) : error
      }
    }
  }
})

module.exports = check
