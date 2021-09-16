const Suppliers = require("./suppliers.model");

exports.addSupplier = async (entry) => {
  try {
    await Suppliers.sync();
    await Suppliers.create(entry);
  } catch (error) {
    console.log(error);
  }
};

exports.listSuppliers = async (obj) => {
  try {
    const list = await Products.findAll({ where: obj });
    console.log(list[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.updateSuppliers = async (updateObj, query) => {
  try {
    await Products.update(updateObj, { where: query });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteSuppliers = async (obj) => {
  try {
    await Products.destroy({ where: obj });
  } catch (error) {
    console.log(error);
  }
};
