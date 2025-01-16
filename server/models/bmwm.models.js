const db = require("../models/index");
const { DataTypes } = require("sequelize");

const bmwm = db.define("Bmwm", {
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

module.exports = bmwm;
