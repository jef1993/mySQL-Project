const Products = require("./products.model");
const { sequelize } = require("../connection");

exports.addProduct = async (entry) => {
  try {
    await Products.sync();
    await Products.create(entry);
  } catch (error) {
    console.log(error);
  }
};

exports.listProducts = async (obj) => {
  try {
    const list = await Products.findAll({ where: obj });
    console.log(list[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.updateProducts = async (updateObj, query) => {
  try {
    await Products.update(updateObj, { where: query });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProducts = async (obj) => {
  try {
    await Products.destroy({ where: obj });
  } catch (error) {
    console.log(error);
  }
};
