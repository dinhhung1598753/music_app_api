const Zing = require("./zing-mp3");
const express = require("express");
const app = express();
const port = 5000;

app.get("/", async (req, res) => {
  const response = await Zing.getCategories();
  res.send(response.topic);
});

app.get("/ranking", async (req, res) => {
  const response = await Zing.getChartHome();
  res.send(response.weekChart);
});

app.listen(port, () => console.log(`App running at ${port}`));
