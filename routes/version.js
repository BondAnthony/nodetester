
module.exports = function (app) {
app.get('/api/qa2', function (req, res){
  res.json({version: '16.03.02.0009'});
});

app.get('/api/qa1', function (req, res){
  res.json({version: '16.04.01.0005'});
});
};
