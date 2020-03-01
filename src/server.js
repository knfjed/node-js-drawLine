var express = require("express");
var app = express();

app.use(express.static("src"));
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3002, () => {});
