��# node-crud

To start the application 

1)Seting up is mysql

mysql connection setting

 host: "localhost",
 user: "root",
 password: "root",
 database: "user"
 
basic table required

 CREATE DATABASE USER
 
 CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
)

2) npm install

3)npm start 
