
# js version
**WORK IN PROGRESS**
This tool detects the js version of given code
## API
Currently returns boolean - true if code is valid javascript of given
ecmaVersion: [ 3 | 5 | 6 (2015) | 7 (2016) | 8 (2017) | 9 (2018) | 10 (2019, partial support) ].

```javascript
	check(`${code}`, `${ecmaVersion}`)
```
