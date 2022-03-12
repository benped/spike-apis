const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stopRouter = require('./routes/stop.router.js')
// const genreRouter = require('./routes/genre.router.js')
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/stops', stopRouter);
// app.use('/api/genre', genreRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
