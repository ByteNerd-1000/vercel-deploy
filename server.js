const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/about", (req, res) => {
  res.status(200).json({ msg: "This is me!" });
});


app.get("/", (req, res) => {
  res.status(200).json({ msg: "frontend can request backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
