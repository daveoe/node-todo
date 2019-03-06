
const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the Todo'
};

const complete = {
    default: true,
    alias: 'c',
    desc: 'Marks as complete or pending the Todo'
};


const argv = require('yargs')
            .command('create','Create a Todo Element',{
                description
            })
            .command('update','Update a Todo Element',{
                description,
                complete
            })
            .command('delete','Delete a Todo Element',{
                description
            })
            .help()
            .argv;

module.exports = {
    argv
}