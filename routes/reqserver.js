/* Simple route to responsed with expected json. 
   Using this to simulate a response from a service*/

module.exports = function (app) {
app.get('/api/server1', function (req, res){
  res.json({version: '16.03.02.0009'});
});

app.get('/api/server2', function (req, res){
  res.json({version: '16.04.01.0005'});
});
};
