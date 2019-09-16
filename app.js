//Importar para nossa aplicação
const express = require('express');
const path = require('path');

//Criamos uma constante para a porta pela qual as pessoas poderão acessar nosso servidor
const port = 3000;

//Instaciamos uma aplicação Express
const app = express();

//Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
})