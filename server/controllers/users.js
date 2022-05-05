var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.users.getAll((err, data) => {
      if (err) {
        console.log('error inside USERS GET CONTROLLER', err);
        res.sendStatus(405);
      } else {
        res.status(205).send(data);
      }
    });
  },
  post: function (req, res) {
    var args = [req.body.username];
    console.log(args);

    models.users.create(args, (err) => {
      if (err) {
        console.log('error inside USERS POST CONTROLLER', err);
        res.sendStatus(407);
      } else {
        res.sendStatus(208);
      }
    });
  }
};
