// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');


let command = argv._[0];

switch (command) {

    case 'create':

        let task = todo.create(argv.description);
        console.log(task);

    break;

    case 'list':

        let list = todo.getList();

        for (let task of list){
            console.log('========Todo========'.white);
            console.log(task.description);
            console.log('Status:',task.complete);
            console.log('===================='.white);
        }

    break;

    case 'update':

        let updated = todo.update(argv.description, argv.complete);
        console.log(updated);

    break;

    case 'delete':

        let deleted = todo.Delete(argv.description);
        console.log(deleted);

    break;

    default:
        console.log('The command is not recognized.');

}