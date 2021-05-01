/**
 * APP CONSTANTS
 */
const express = require('express');
const router = express.Router();
const bookList = [];

/**
 * ADD BOOK ROUTE
 * HTTP GET
 */
router.get('/add-book', (req, res, next) => {
    res.render('pages/addbook');
});

/**
 * SAVE BOOK ROUTE
 * HTTP POST
 */
router.post('/save-book', (req, res, next) => {
    const book = {
        title: req.body.book,
        summary: req.body.summary
    };
    bookList.push(book);
    res.redirect('/');
});

/**
 * DEFAULT ROUTE
 * HTTP GET
 */
router.get('/', (req, res, next) => {
    res.render('pages/home', {
        books: bookList
    });
});

module.exports = router;