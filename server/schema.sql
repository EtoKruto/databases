
-- CREATE DATABASE chat;
-- DROP TABLE [IF EXISTS] chat;
USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username varchar(25) not null,
  message varchar(140) not null,
  roomname varchar(25) not null
);

/* Create other tables and define schemas for them here! */

--  id  INT unsigned NOT NULL AUTO_INCREMENT, # Unique ID
--    ->   title  VARCHAR(150) NOT NULL,                # Name of book title
--    ->   author  VARCHAR(150) NOT NULL,                # Title of the Author
--    ->   pages  SMALLINT UNSIGNED,                        # Pages in the book
--    ->   PRIMARY KEY     (id)                         # ID = Primary key



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- you find a bug in the schema or how it was generated, you'll want to "drop" all the new tables before running it again. This will reset your database by throwing away all data and schema information