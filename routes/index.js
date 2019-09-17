const express = require('express');
const router = express.Router();
const path = require('path');
const port = 3000;

router.get('/index', (req, res, next) => {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

module.exports = router;