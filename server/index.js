const express = require("express");
require("./models/index")

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
