const express = require('express');
const port = 3000;
const path = require('path');

const app = express();

const indexRoute = require('./routes/index')
const curriculoRoute = require('./routes/curriculo')

//Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
})

app.get('/index', indexRoute);
app.get('/curriculo', curriculoRoute);