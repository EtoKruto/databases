DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  -- /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  text VARCHAR(140) NOT NULL,
  roomname VARCHAR(25) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(user_id) REFERENCES users (id)
);

-- /* Create other tables and define schemas for them here! */

--  id  INT unsigned NOT NULL AUTO_INCREMENT, # Unique ID
--    ->   title  VARCHAR(150) NOT NULL,                # Name of book title
--    ->   author  VARCHAR(150) NOT NULL,                # Title of the Author
--    ->   pages  SMALLINT UNSIGNED,                        # Pages in the book
--    ->   PRIMARY KEY     (id)                         # ID = Primary key



-- /*  Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.*/

-- you find a bug in the schema or how it was generated, you'll want to "drop" all the new tables before running it again. This will reset your database by throwing away all data and schema information