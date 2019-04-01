DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(40) NOT NULL,
  price INT NOT NULL,
  stock INT NOT NULL,
  total_sold INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("television", "electronics", 100, 250);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("bluetooth speaker", "electronics", 200, 50);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("tablet", "electronics", 200, 300);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("microwave", "appliances", 100, 75);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("coffee maker", "appliances", 200, 50);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("blender", "appliances", 100, 75);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("bicycle", "recreation", 70, 400);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("tricycle", "recreation", 50, 50);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("unicycle", "recreation", 100, 150);

INSERT INTO products (product_name, department_name, stock, price)
VALUES ("skateboard", "recreation", 100, 100);

SELECT * FROM bamazon.products;