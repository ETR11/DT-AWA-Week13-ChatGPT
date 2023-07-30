const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// POST route to save a book to the database
router.post('/api/book', (req, res, next) => {
  const { author, name, pages } = req.body;
  const newBook = new Book({ author, name, pages });

  newBook.save()
    .then((savedBook) => {
      console.log('Book saved:', savedBook);
      res.json(savedBook);
    })
    .catch((err) => {
      console.error('Error saving book:', err);
      res.status(500).json({ error: 'Failed to save the book' });
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
