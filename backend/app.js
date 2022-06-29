var express = require('express')
var cors = require('cors')
var app = express()
var body = require('body-parser')

var UserFormRouter = require('./routes/userform.route')


app.use(express.json())
app.use(express.urlencoded())

app.use(cors())
app.use(body.json());
app.use(body.urlencoded({
    extended: true
}));

app.use("/userForm",UserFormRouter)



app.listen(5002, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
  