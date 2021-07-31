const express = require('express');
const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3300;

bookRouter.route('/books')
  .get((req, res) => {
    const response = {hello: "This is from book layer"};
    res.json(response);
  });

  bookRouter.route('/authors')
  .get((req, res) => {
    const response = {author: "Hello from author route"};
    res.json(response);
  })

app.use('/api/', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the bookreads API');
});

app.listen(port, () => {
  console.log(`Running on port, ${port}`);
});
