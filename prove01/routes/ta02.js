//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const userList = [];


router.post('/addUser', (req, res, next) => {
    userList.push(req.body.user);
    res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
    let user = req.body.user;
    let index = userList.indexOf(user);
    userList.splice(index, 1);
    res.redirect('/ta02');
});

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: 'ta02', // For pug, EJS 
        users: userList,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;