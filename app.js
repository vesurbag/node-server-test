var express = require("express")
var path = require("path")

var app = express()
console.log('App is created')

var test = require("./route")
app.use("/test", test)

var port = 8080

app.listen(port, function() {
  console.log('Server started at port', port)
})
