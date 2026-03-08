const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 3,
        required: true,
    },
    description: {
        type: String,
        min: 5,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: 'Pending',
    },
})

const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;