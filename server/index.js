const express = require("express");
const Router = require("./routers/mustang.router");
require("./models/index")

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())

app.use("/api" , Router)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
