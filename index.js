const express = require("express");

const app = express();

const PORT = 3000;

app.get("/biodata", (req, res) => {
  const query = req.query;
  res
    .json({
      nama: query.name,
      "tempat-lahir": query["tempat-lahir"],
      "tanggal-lahir": query["tanggal-lahir"],
      alamat: query.alamat,
    })
    .status(200);
});

app.listen(PORT, () => {
  console.log("Express running in port: " + PORT);
});
