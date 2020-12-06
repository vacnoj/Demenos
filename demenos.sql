DROP DATABASE IF EXISTS Demenos;
CREATE DATABASE Demenos;

USE Demenos;

CREATE TABLE Customer (
    customer_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    'password' VARCHAR(255),
    created_date VARCHAR(255),
    pay_info_id FOREIGN KEY,
    PRIMARY KEY (customer_id)
)

CREATE TABLE Guest (

)

-- birthday DATE,
--     card_number VARCHAR(255),
--     card_expiration_date DATE,
--     cvv VARCHAR(255),
--     name_on_card VARCHAR(255),
--     PRIMARY KEY (id)
