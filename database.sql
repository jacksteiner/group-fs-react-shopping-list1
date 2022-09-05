-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE list(
	id SERIAL PRIMARY KEY,
	name varchar(80) NOT NULL,
	quantity NUMERIC NOT NULL,
	unit varchar(20)
);