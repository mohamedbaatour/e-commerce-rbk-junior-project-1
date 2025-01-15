const express = require("express");
const Router = require("./routers/index")
require("./models/index")
require("./routers/index");
require("./routers/bmwm.router")
require("./routers/mustang.router");
const cors = require("cors")

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api", Router)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
