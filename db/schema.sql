DROP DATABASE IF EXISTS

CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE BURGER (
  id Int( 11 ) AUTO_INCREMENT NOT NULL;
  burger_name VARCHAR(30 ) NOT NULL;
  devoured ;

  PRIMARY KEY (id) ;
);