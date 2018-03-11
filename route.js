var express = require("express")
var router = express.Router()

router.get('/get', function(req, res) {
  res.json({
    message: 'Success message'
  })
})

module.exports = router