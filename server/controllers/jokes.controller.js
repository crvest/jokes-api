const Jokes = require('../models/jokes.model');

// test
module.exports.sayHello = (req, res) => {
    res.json({ message: 'Hello'});
};

// get all jokes function
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
    .then(allTheJokes => res.json({ jokes: allTheJokes }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// get one joke function
module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params._id })
    .then(oneJoke => res.json({ joke: oneJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// create a new joke
module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// update a joke
module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// delete a joke
module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params._id })
    .then(deletedJoke => res.json({ joke: deletedJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};