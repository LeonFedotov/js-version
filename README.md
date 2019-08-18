# js version
This jest expect matcher detects the js version of given code
## API

```javascript
  require('js-version-detector')
  // ...
  test('const', () => expect('const a = 5').toBeOfVersion(5))
  /*
      > 1 | const a = 5
          | ^ SyntaxError: The keyword 'const' is reserved (1:0)
  */
```
