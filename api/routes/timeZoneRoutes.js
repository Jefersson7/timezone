module.exports = app => {
  var timeZone = require('../controllers/timeZoneController')
  app.route('/')
  .post(timeZone.getUtcTime)
}
