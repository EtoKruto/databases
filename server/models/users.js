var db = require('../db');

module.exports = {
  getAll: function (callback) {


    db.connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.log('error inside USERS GETALL', err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  create: function (args, callback) {
    var queryStringCreate = 'INSERT INTO users (username) VALUES (?)';

    db.connection.query(queryStringCreate, args, (err) => {
      if (err) {
        console.log('error inside USERS CREATE', err);
        callback(err);
      } else {
        callback(null);
      }
    });

  }
};
