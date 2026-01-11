CREATE DATABASE perntodo;
CREATE TABLE Todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE
);