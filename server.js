const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 1000;

app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/postparam", (req, res) => {
  console.log("post data:", req.body);
  res.send(`nama = ${req.body.nama} <br>
    kota = ${req.body.kota} <br>
    propinsi = ${req.body.propinsi} <br>`);
});

app.get("/proses1", (req, res) => res.send("Ini proses pertama"));

app.get("/proses2", (req, res) => res.send("Ini proses kedua"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
