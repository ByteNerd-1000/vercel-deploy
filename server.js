
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send({'Hello, this is your backend!'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
