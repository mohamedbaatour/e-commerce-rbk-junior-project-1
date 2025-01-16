const Sequelize = require("sequelize");

const db = new Sequelize("cars-e-commerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

db.sync({ alter: true })
  .then(() => {
    console.log("phrase table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = db;
