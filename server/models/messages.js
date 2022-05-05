var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM messages', (err, rows) => {
      if (err) {
        console.log('error inside MODELS CREATE', err);
        callback(err, null);
      } else {
        console.log(rows);
        callback(null, rows);
      }
    });
  }, // a function which produces all the messages
  create: function () {

  } // a function which can be used to insert a message into the database
};
