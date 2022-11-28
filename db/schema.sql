DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category(
    id INT NOT NULL AUTO_INCREMENT, 
    category_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Product(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price VARCHAR(30) NOT NULL,
    stock INT (10) NOT NULL,
    category_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(Category),
    REFERENCES(Category model_id)
);

CREATE TABLE Tag(
    id INT NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE ProductTag(
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    PRIMARY KEY(id),
    REFERENCES(Product model_id),
    tag_id INT,
    REFERENCES(tag model_id)
);


