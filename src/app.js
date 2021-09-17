const command = process.argv.slice(2);
const { addProduct } = require("./db/products/products.methods");

const { addSupplier } = require("./db/suppliers/suppliers.methods");
const { findItems, updateItems, deleteItems } = require("./db/methods");

const Products = require("./db/products/products.model");
const Suppliers = require("./db/suppliers/suppliers.model");

const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("./db/connection");

const app = async () => {
  if (command[0] === "addSupplier") {
    const obj = {
      name: command[1],
      credibility: `${command[2][0].toUpperCase()}${command[2]
        .slice(1)
        .toLowerCase()}`,
    };

    await addSupplier(obj);
  }
  if (command[0] === "addProduct") {
    const Obj = {
      name: command[1],
      unit_price: command[2],
      quantity_in_stock: command[3],
      supplier_id: command[4],
    };

    await addProduct(Obj);
  }

  if (command[0] === "find") {
    const obj = {};

    for (let i = 2; i < command.length; i += 3) {
      obj[command[i]] = { [eval(command[i + 1])]: command[i + 2] };
    }
    await findItems(eval(command[1]), obj);
  }

  if (command[0] === "update") {
    const updateObj = {};
    const query = {};

    const updateArr = command[2].split(/[/]/);
    const queryArr = command[3].split(/[/]/);

    for (let i = 0; i < updateArr.length; i += 2) {
      updateObj[updateArr[i]] = updateArr[i + 1];
    }
    for (let i = 0; i < queryArr.length; i += 3) {
      query[queryArr[i]] = { [eval(queryArr[i + 1])]: queryArr[i + 2] };
    }
    console.log(updateObj);
    console.log(query);
    await updateItems(eval(command[1]), updateObj, query);
  }

  if (command[0] === "delete") {
    const obj = {};

    for (let i = 2; i < command.length; i += 3) {
      obj[command[i]] = { [eval(command[i + 1])]: command[i + 2] };
    }
    console.log(obj);
    await deleteItems(eval(command[1]), obj);
  }

  if (command[0] === "raw") {
    const query = await sequelize.query(command[1]);
    console.log(query[0]);
  }
};

app();
