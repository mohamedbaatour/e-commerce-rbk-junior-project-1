const db = require("../models/index")
const { DataTypes } = require("sequelize");

const mustang = db.define("Mustang", {
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = mustang
