var express = require('express')
var cors = require('cors')
var app = express()
var body = require('body-parser')

var UserFormRouter = require('./routes/userform.route')


app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

app.use("/userForm",UserFormRouter)



app.use(body.json());
app.use(body.urlencoded({
    extended: true
}));


app.listen(5002, function () {
    console.log('CORS-enabled web server is online')
  })
  