var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM messages', (err, rows) => {
      if (err) {
        console.log('error inside MODELS GETALL', err);
        callback(err, null);
      } else {
        console.log(rows);
        callback(null, rows);
      }
    });
  }, // a function which produces all the messages
  create: function (body, callback) {
    console.log(body.text);
    var queryStringCreate = 'insert into messages (username, text, roomname) values (?, ?, ?)';
    var argsCreate = [body.username, body.text, body.roomname];
    db.connection.query(queryStringCreate, argsCreate, (err) => {
      if (err) {
        console.log('error in mysql post', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  } // a function which can be used to insert a message into the database
};
