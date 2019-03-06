const fs = require('fs');


let listTodo = [];


// Saving DB
const saveDB = () => {

    let data = JSON.stringify(listTodo);

    fs.writeFile('db/data.json', data, (err) => {
        
        if (err) throw new Error('It could not be save', err);

    });

}


// Loading DB
const loadDB = () => {

    try {

        listTodo = require('../db/data.json');


    } catch(error) {

        listTodo = [];

    }

}


// Creating Todo and Saving it
const create = (description) => {

    loadDB();

    let todo = {
        description,
        complete: false
    };

    listTodo.push(todo);

    saveDB();

    return todo;

}


// Get the list of Todos
const getList = () => {

    loadDB();

    return listTodo;

}


// Update Todo
const update = (description, complete = true) => {

    loadDB();
                             // Same as => {return task.description === description}
    let index = listTodo.findIndex(task => task.description === description);

    if (index >= 0 ) {
        listTodo[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }

}


// Delete Todo
const Delete = (description) => {

    loadDB();

    let newList = listTodo.filter(task => task.description !== description);

    if (listTodo.length === newList.length) {
        return false;        
    } else {
        listTodo = newList;
        saveDB();
        return true;
    }

}


module.exports = {
    create,
    getList,
    update,
    Delete
}