# mySQL-Project

This app requires you to run "npm i" and add a .env file with a valid URI to work

## Add product

- node src/app.js add "productName" "unitPrice" "quantity" "supplier_id"

## Find product

- node src/app.js findAll "object key" "Operator" "object value"
- you can use more than one object as filter

## Update

- node src/app.js update "object key"="object value"/ "newObj key"="Operator"="newObj value"/
- you can use more than one object as filter and update content

## Delete

- node src/app.js delete "object key" "Operator" "object value"
- you can use more than one object as filter

## Raw Queries

- node src/app.js raw "query"
- example: node src/app.js raw "SELECT p.name as product_name, s.name as supplier from Products p join Suppliers s on p.supplier_id = s.supplier_id"
