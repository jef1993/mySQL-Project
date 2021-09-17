const Products = require("./products.model");
const { Op } = require("sequelize");

exports.addProduct = async (entry) => {
  try {
    await Products.sync();
    await Products.create(entry);
  } catch (error) {
    console.log(error);
  }
};

// exports.findItems = async (table, obj) => {
//   try {
//     const list = await table.findAll({
//       where: obj,
//     });
//     console.log(list.map((el) => el.dataValues));
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.updateItems = async (table, updateObj, query) => {
//   try {
//     await table.update(updateObj, { where: query });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.deleteItems = async (table, obj) => {
//   try {
//     await table.destroy({ where: obj });
//   } catch (error) {
//     console.log(error);
//   }
// };
