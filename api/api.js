var express = require('express');
var bodyParser = require('body-parser');
var appCor = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(appCor());

app.post('/register', function (req, res) {
    console.log(req.body);
    res.send('hi');
});

var server = app.listen(3000, function() {
    console.log('api listening on ', server.address().port);
});