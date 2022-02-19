const express = require("express");
const path = require("path");

const CLIENT_PATH = path.join(__dirname, "../../client/build");

const app = express();
const port = process.env.PORT || 80;

app.use("/", express.static(CLIENT_PATH));

app.use((req, res) => {
  try {
    res.sendFile(path.join(CLIENT_PATH, "index.html"));
  } catch {
    res.status(404).send("Not Found");
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
