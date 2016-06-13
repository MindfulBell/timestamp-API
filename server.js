var app = require('./app.js')
var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});