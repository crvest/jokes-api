const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, 'Setup must be at least 10 characters long']
    },
    punchline: {
        type: String,
        minlength: [3, 'Punchline must be at least 10 characters long']
    }
});

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;