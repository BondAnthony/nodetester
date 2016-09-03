/* Simple route to responsed with expected json. 
   Using this to simulate a response from a service*/
var jsonfile = require('jsonfile');

module.exports = function (app) {
app.get('/api/server1', function (req, res){
  var reqfile = './resources/server1.json';
  res.json(jsonfile.readFileSync(reqfile));
});

app.get('/api/server2', function (req, res){
    var reqfile = './resources/server2.json';
  res.json(jsonfile.readFileSync(reqfile));
});
};
