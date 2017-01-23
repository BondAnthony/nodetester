/* Simple route to responsed with expected json. 
   Using this to simulate a response from a service*/
var jsonfile = require('jsonfile');

module.exports = function (app) {

  app.get('/', function (req, res) {
    var options = {
      root: __dirname + '/../resources',
      dotfiles: 'deny',
      headers: {
        'Content-Type': 'text/html'
      }
    };
    var resFile = 'index.html';
    res.sendFile(resFile, options, function(err){
      if (err){
        console.log(err);
        res.status(err.status).end();
      } else {
        console.log('Sent: ' + resFile);
      }
    });
  })

  app.get('/api/server1', function (req, res) {
    var reqfile = './resources/server1.json';
    res.json(jsonfile.readFileSync(reqfile));
  });

  app.get('/api/server2', function (req, res) {
    var reqfile = './resources/server2.json';
    res.json(jsonfile.readFileSync(reqfile));
  });
};
