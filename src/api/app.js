const express = require('express');

const app = express();
const port = process.env.PORT || 3300;

app.get('/', (req, res) => {
  res.send('Welcome to the bookreads API');
});

app.listen(port, () => {
  console.log(`Running on port, ${port}`);
});
