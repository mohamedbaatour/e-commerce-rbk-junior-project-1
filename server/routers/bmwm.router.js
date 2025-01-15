const {
  getAllBmwm,
  postBmwm,
  updateBmwm,
  deleteBmwm,
  deleteAllBmwm,
} = require("../controllers/bmwm.controller");
const Router = require("./index")

Router.get("/bmwm", getAllBmwm);
Router.post("/bmwm", postBmwm);
Router.put("/bmwm/:id", updateBmwm);
Router.delete("/bmwm/:id", deleteBmwm);
Router.delete("/bmwm", deleteAllBmwm);

