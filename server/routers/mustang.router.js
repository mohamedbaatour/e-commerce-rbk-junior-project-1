const express = require("express")
const { getAllMustangs , postMustang , updateMustang , deleteMustang, deleteAllMustangs} = require("../controllers/mustang.controller")
const Router = express.Router()

Router.get("/mustangs", getAllMustangs)
Router.post("/mustangs", postMustang);
Router.put("/mustangs/:id", updateMustang)
Router.delete("/mustangs/:id" , deleteMustang);
Router.delete("/mustangs/", deleteAllMustangs);

module.exports = Router