# mySQL-Project

This app requires you to run "npm i" and add a .env file with a valid URI to work

## IMPORTANT---create Suppliers table before create Products table!

- node src/app.js addSupplier "supplierName" "credibility"
- example: node src/app.js addSupplier "Good Company" "Good"

## Add product

- node src/app.js addProduct "productName" "unitPrice" "quantity" "supplier_id"

## Find product

- node src/app.js find "tableName" "object key" "Operator" "object value"
- example: node src/app.js find Suppliers supplier_id Op.eq 2
- you can use more than one object as filter

## Update

- node src/app.js update "tableName" "newobject key"/"newobject value" "query key"/"Operator"/"query value"
- example: node src/app.js update Products name/Greatsword product_id/Op.eq/2
- you can use more than one object as filter and update content

## Delete

- node src/app.js delete "tableName" "object key" "Operator" "object value"
- example: - node src/app.js delete Suppliers supplier_id Op.eq 2
- you can use more than one object as filter

## Raw Queries

- node src/app.js raw "query"
- example: node src/app.js raw "SELECT p.name as product_name, s.name as supplier from Products p join Suppliers s on p.supplier_id = s.supplier_id"
