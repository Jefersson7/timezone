var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

var routes = require('./api/routes/timeZoneRoutes')
routes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
