const express = require('express');
const router = express.Router();
const bookList = [];

router.get('/add-book', (req, res, next) => {
    res.render('pages/addbook', {
        title: 'Team Activity 02',
        path: 'addbook'
    });
});

router.post('/save-book', (req, res, next) => {
    const book = {
        title: req.body.book,
        summary: req.body.summary
    };
    bookList.push(book);
    res.redirect('/');
});

router.use('/', (req, res, next) => {
    res.render('pages/home', {
        path: 'home',
        books: bookList
    });
});



module.exports = router;