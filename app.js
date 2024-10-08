const express = require("express");
const PORT = 3002;

const app = express();

app.get("", (req, res) => {
  res.send("Message from product service-2");
});

app.listen(PORT, () => console.log("PRODUCT SERVICE STARTED"));
