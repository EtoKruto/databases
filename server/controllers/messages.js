var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log('controllers get');
    // res.set('Content-Type', 'text/plain');
    models.messages.getAll((err, data) => {
      if (err) {
        console.log('error in controller, get', err);
        res.sendStatus(404);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, (err) => {
      if (err) {
        console.log('error in controller, post', err);
        res.sendStatus(401);
      } else {
        res.sendStatus(202);
      }
    });
  } // a function which handles posting a message to the database
};
