const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('pages/home', {
        title: 'Team Activity 02',
        path: 'home'

    });
});



module.exports = router;