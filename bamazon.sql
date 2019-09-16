
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;


USE bamazon;

CREATE TABLE products (
  id INTEGER(11) auto_increment,
  item_id VARCHAR(30) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  price INTEGER(10),
  stock_quantity INTEGER(10)
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (011, "PS4", "ELECTRONICS", "400", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (022, "XBOXONE", "ELECTRONICS", "400", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (033, "HEADPHONES", "ELECTRONICS", "150", "30");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (044, "LOTION", "COSMETICS", "25", "60");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (055, "APPLES", "PRODUCE", "1", "500");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (066, "CHAIR", "FURNITURE", "55", "35");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (077, "TV", "ELECTRONICS", "600", "15");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (088, "DESK", "FURNITURE", "100", "25");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (099, "SHOES", "CLOTHING", "400", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (012, "SPEAKER", "ELECTRONICS", "150", "10");
