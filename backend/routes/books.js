const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

module.exports = router;