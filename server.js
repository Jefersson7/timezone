var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000

var routes = require('./api/routes/timeZoneRoutes')
routes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

