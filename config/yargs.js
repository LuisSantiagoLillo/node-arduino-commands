const opts = {
    name: {
        demand: true,
        alias: 'n'
    }
}


const argv = require('yargs')
    .command('hello', 'Prints "Hello world"', opts)
    .help()
    .argv;


module.exports = {
    argv
}