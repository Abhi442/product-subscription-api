const express = require('express');
const router = require('./router/main.router');
const app = express();
const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});