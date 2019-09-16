
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
Values (01, "PS4", "ELECTRONICS", "400", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (02, "XBOXONE", "ELECTRONICS", "400", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (03, "HEADPHONES", "ELECTRONICS", "150", "30");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (04, "LOTION", "COSMETICS", "25", "60");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (05, "APPLES", "PRODUCE", "1", "500");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (06, "CHAIR", "FURNITURE", "55", "35");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (07, "TV", "ELECTRONICS", "600", "15");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (08, "DESK", "FURNITURE", "100", "25");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (09, "SHOES", "CLOTHING", "400", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (10, "SPEAKER", "ELECTRONICS", "150", "10");
