var shell = require('./shell_helper.js')

console.log('single command')
shell.exec('brew list', (err) => {
    console.log('done executed single command')
})


console.log('series command')
shell.series([
    'brew list', 'ls -al', 'ifconfig'
], function (err) {
    console.log('done executed series command')
})