const Zing = require("./zing-mp3");
const express = require("express");
const app = express();
const port = 5000;

app.get("/", async (req, res) => {
  const response = await Zing.getCategories();
  res.send(response.topic);
});

app.get("/streaming", async (req, res) => {
  const { id } = req.query;
  const response = await Zing.getStreaming(id);
  res.send(response["128"]);
});

app.get("/ranking", async (req, res) => {
  const response = await Zing.getChartHome();
  const ranking = {
    vn: response.weekChart.vn.items,
    us: response.weekChart.us.items,
    korea: response.weekChart.korea.items,
  };
  res.send({
    vn: ranking.vn.map((x) => ({
      id: x.encodeId,
      name: x.title,
      singer: x.artistsNames,
      thumbnail: x.thumbnail,
      url: "",
    })),
    us: ranking.us.map((x) => ({
      id: x.encodeId,
      name: x.title,
      singer: x.artistsNames,
      thumbnail: x.thumbnail,
      url: "",
    })),
    korea: ranking.korea.map((x) => ({
      id: x.encodeId,
      name: x.title,
      singer: x.artistsNames,
      thumbnail: x.thumbnail,
      url: "",
    })),
  });
});

app.listen(port, () => console.log(`App running at ${port}`));
