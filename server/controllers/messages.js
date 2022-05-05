var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log('controllers get');
    // res.set('Content-Type', 'text/plain');
    models.messages.getAll((err, data) => {
      if (err) {
        console.log('error inside MESSAGES GET CONTROLLER', err);
        res.sendStatus(404);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var args = [req.body.username, req.body.text, req.body.roomname];
    models.messages.create(args, (err) => {
      if (err) {
        console.log('error in controller, post message', err);
        res.sendStatus(401);
      } else {
        res.sendStatus(280);
      }
    });
  } // a function which handles posting a message to the database
};
