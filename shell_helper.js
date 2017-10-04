var child_process = require('child_process')

// single command execute
exports.exec = (cmd, done) => {
    var parts = cmd.split(/\s+/g)
    var p = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'})
    p.on('exit', (code) => {
        var err = null
        if (code) {
            err = new Error('command "' + cmd + '" exited with wrong status code "' + code + '"')
            err.code = code
            err.cmd = cmd
        }
        if (done) {
            done(err)
        }
    })
}

// series command excute
exports.series = (cmds, done) => {
    var execNext = () => {
        exports.exec(cmds.shift(), (err) => {
            if (err) {
                done(err)
            } else {
                if (cmds.length) {
                    execNext()
                } else {
                    done(null)
                }
            }
        })
    }
    execNext()
}
