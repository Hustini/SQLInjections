DROP DATABASE IF EXISTS express_login_demo;
CREATE DATABASE express_login_demo;

USE express_login_demo;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Insert a test user
INSERT INTO users (username, password) VALUES ('admin', 'password123');
INSERT INTO users (username, password) VALUES ('salih', 'password456');