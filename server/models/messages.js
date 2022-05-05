var db = require('../db');

module.exports = {
  getAll: function (callback) {
    //"select messages.id, messages.text, messages. roomname from messages left outer join users on (messages.user_id = users.id) order by messages.id desc";


    db.connection.query('SELECT messages.id, messages.text, messages.roomname, users.username FROM messages left outer join users on (messages.user_id = users.id) order by messages.id desc', (err, rows) => {
      if (err) {
        console.log('error inside MESSAGES GETALL', err);
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  }, // a function which produces all the messages
  create: function (args, callback) {
    var queryStringCreate = 'insert into messages (user_id, text, roomname) values ((select id from users where username = ?), ?, ?)';
    db.connection.query(queryStringCreate, args, (err) => {
      if (err) {
        console.log('error in mysql post', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  } // a function which can be used to insert a message into the database
};
