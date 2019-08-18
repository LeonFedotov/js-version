const acorn = require('acorn')
const { codeFrameColumns } = require('@babel/code-frame')

expect.extend({
  toBeOfVersion(received, ecmaVersion = 5) {

    try {
      acorn.parse(received, {ecmaVersion})
      return {
        pass: true,
        message: () => this.isNot ? `fail` : `Js matches provided version: ${ecmaVersion}`
      }
    } catch(error) {
      return {
        pass: false,
        message: () => this.isNot ? 'fail' : codeFrameColumns(received, { start: error.loc }, { highlightCode: true, message: error })
      }
    }
  }
})
