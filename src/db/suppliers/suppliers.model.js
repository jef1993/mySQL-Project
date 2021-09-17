const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");

const Suppliers = sequelize.define(
  "Suppliers",
  {
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
  },
  {
    timestamps: false,
  }
);

module.exports = Suppliers;
