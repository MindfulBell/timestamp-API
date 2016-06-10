var express = require('express');
var moment = require('moment');
var app = express();

function hasLetters(str){
    for (var i=0; i<str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
            str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
                return true;
            }
    }
}

app.get('/', function (req, res) {
  res.send("Please enter a time string");
});

app.get('/:string', function (req, res) {
    var param = req.params.string;
    var date = hasLetters(param) ? new Date(param) : new Date(parseInt(param*1000));
    var obj = { "unix": null, "natural": null }
    
    if (date != 'Invalid Date') {
        obj.unix = date.getTime()/1000;
        obj.natural = moment(date).format("MMMM Do, YYYY");
    }
    res.json(obj);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});