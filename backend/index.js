const express = require("express");
const cors = require("cors");
let RssParser = require("rss-parser");

const feedUrl = "https://techcrunch.com/feed/";

const app = express();

// fetch the feed information from Netflix
let articles = [];
const parser = new RssParser();
const parse = async (url) => {
  let feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
};
parse(feedUrl);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(articles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});
