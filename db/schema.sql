DROP IF EXISTS
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burger (
  id Int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30 ) NOT NULL,
  devoured BOOLEAN DEFAULT false,

  PRIMARY KEY (id) 
);