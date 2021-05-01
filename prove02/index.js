/**
 * Creating app by using Express
 * and defining the routes in the routes folder
 */
const express = require('express');
const app = express();
const routes = require('./routes/approutes');
const path = require('path');
const PORT = process.env.PORT || 3000

/**
 * instantiating app server instance on port 3000
 * Showing Prove 01 assignment page
 * If page route is not found 404 page is shown
 */
app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.urlencoded({ extended: false }))
    .use(routes)
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last. 
        res.render('pages/index', { title: 'PROVE 02', path: '/' });
    })
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url })
    })
    .listen(PORT, () => { console.log(`Prove 02 Server running on Port ${PORT}`); });