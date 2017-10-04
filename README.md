# node-shell-exec
easy shell execute for nodejs

## Execute single command

```js
var shell = require('./shell_helper.js')

console.log('single command')
shell.exec('brew list', (err) => {
    console.log('done executed single command')
})
```

## Execute serires command

```js
var shell = require('./shell_helper.js')

console.log('series command')
shell.series([
    'brew list', 'ls -al', 'ifconfig'
], function (err) {
    console.log('done executed series command')
})
```
