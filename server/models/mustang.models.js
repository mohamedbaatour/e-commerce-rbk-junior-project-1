const db = require("../models/index")
const { DataTypes } = require("sequelize");

const mustang = db.define(
  "Mustang",
  {
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
);

module.exports = mustang
