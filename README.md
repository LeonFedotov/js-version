# js version
This jest expect matcher detects the js version of given code
## API
Either:
```javascript
  require('js-version-detector')
  // ...
  test('const', () => expect('const a = 5').toBeOfVersion(5, false))
  // SyntaxError: The keyword 'const' is reserved (1:0)

  test('const', () => expect('const a = 5').toBeOfVersion(5, true))
  /*
      > 1 | const a = 5
          | ^ SyntaxError: The keyword 'const' is reserved (1:0)
  */
```
Or:
```javascript
  const check = require('js-version-detector')
  // ...
  console.log(check('const a = 5', 'filename.js', 5))
  /*
    {
      message: 'The keyword \'const\' is reserved (1:0)',
      loc: Position { line: 1, column: 0 }
    }
    (cached with filename as key)
  */
  console.log(check('var a = 5', 'es5-filename.js', 5)) //true
```
