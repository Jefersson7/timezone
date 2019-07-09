var moment = require('moment')

exports.getUtcTime = (req, res) => {
  let time = moment(req.query.time, 'HH:mm:ss').utcOffset(parseInt(req.query.zone), true).utc().format('HH:mm:ss')
  res.json({
    response: {
      time: time,
      timezone: 'utc'
    }
  })
}