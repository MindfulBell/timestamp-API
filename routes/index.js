var express = require('express');
var router = express.Router();
var moment = require('moment');
var hasLetters = require('../util.js');

router.use(express.static(__dirname + '/../public'));

router.get('/', function (req, res) {
  res.sendFile('index.html');
});

router.get('/favicon.ico', function (req, res){
    res.sendFile('favicon.ico')
})

router.get('/:string', function (req, res) {
    var param = req.params.string;
    var date = hasLetters(param) ? new Date(param) : new Date(parseInt(param*1000));
    var obj = { "unix": null, "natural": null };
    
    if (date != 'Invalid Date') {
        obj.unix = date.getTime()/1000;
        obj.natural = moment(date).format("MMMM Do, YYYY");
    }
    res.send(obj);
});

module.exports = router;