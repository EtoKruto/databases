var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('controllers get');
    res.set('Content-Type', 'text/plain');
    models.messages.getAll((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {



  } // a function which handles posting a message to the database
};
