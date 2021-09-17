const { sequelize } = require("../connection");
const { Sequelize, DataTypes } = require("sequelize");
const Products = sequelize.define("Products", {
  product_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  unit_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  quantity_in_stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

const Suppliers = sequelize.define("Suppliers", {
  supplier_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  credibility: {
    type: DataTypes.STRING,

  },
});

Products.belongsTo(Suppliers, { as: "supplier", foreignKey: "supplier_id" });

module.exports = Products;
