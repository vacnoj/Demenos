DROP DATABASE IF EXISTS demenos;
CREATE DATABASE demenos;

USE demenos;

CREATE TABLE customer (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    birthday DATE,
    card_number VARCHAR(255),
    card_expiration_date DATE,
    cvv VARCHAR(255),
    name_on_card VARCHAR(255),
    PRIMARY KEY (id)
)

