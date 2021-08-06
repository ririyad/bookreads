const express = require('express');
const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3300;
const books = require('./models/bookModel');
const authors = require('./models/authorModel'); 
const publishers = require('./models/publisherModel');
const mongoose = require('mongoose');

const url = `mongodb+srv://rashed:123@sandbox.oqcbq.mongodb.net/bookReads?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

// db connection
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


bookRouter.route('/books')
  .get((req, res) => {
    books.find((err, books) => {
      if(err) {
        return res.send(err);
      } return res.send(books);
    });
  });

  bookRouter.route('/authors')
  .get((req, res) => {
    authors.find((err, authors) => {
      if(err) {
        return res.send(err);
      } return res.send(authors);
    });
  });

  bookRouter.route('/pub')
    .get((req, res) => {
      publishers.find((err, publishers) => {
        if(err){
          return res.send(err);
        }return res.send(publishers);
      })
    })

app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the bookreads API');
});

app.listen(port, () => {
  console.log(`Running on port, ${port}`);
});