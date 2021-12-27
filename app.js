const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { sayHelloWorld } = require('./commands/hello-world');

let command = argv._[0];


switch (command) {

    case 'hello':
        sayHelloWorld(argv.name);
        break;


    default:
        console.log('command not recognized');

}



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]