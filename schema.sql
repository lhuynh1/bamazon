CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER (50) NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100),
department_name VARCHAR (100),
price DECIMAL (20,4),
stock_quantity INTEGER (50),
PRIMARY KEY (item_id)
);

INSERT INTO products 
(item_id, product_name, department_name, price, stock_quantity)
VALUES
(NULL, 'nike_freeruns', 'clothing', '76.89', '26'),
(NULL, 'beats_headphones', 'electronics', '120.95', '15'),
(NULL, 'blendtec_blender', 'home', '420.99', '23'),
(NULL, 'the_pragmatic_programmer', 'books', '32.89', '12'),
(NULL, 'pantene_shampoo', 'beauty_health', '5.99', '27'),
(NULL, 'potting_soil', 'garden', '8.79', '58'),
(NULL, 'converse_shoes', 'clothing', '45.99', '32'),
(NULL, 'yoga_mat', 'fitness', '14.89', '19'),
(NULL, 'wireless_mouse', 'electronics', '25.85', '41'),
(NULL, 'watch', 'jewelry', '105.99', '12');

SELECT * FROM products;