const { getAllMustangs , postMustang , updateMustang , deleteMustang, deleteAllMustangs} = require("../controllers/mustang.controller")
const Router = require("./index");

Router.get("/mustangs", getAllMustangs)
Router.post("/mustangs", postMustang);
Router.put("/mustangs/:id", updateMustang)
Router.delete("/mustangs/:id" , deleteMustang);
Router.delete("/mustangs/", deleteAllMustangs);
