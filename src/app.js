const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path') 
const dotenv = require('dotenv')


const app = express()
const PORT = 3001

dotenv.config()

//settings
app.set('port', process.env.PORT || PORT)
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine','.hbs')

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended:false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(function(req, res, next){
//   if(req.headers['content-type'] === "text/plain;charset=UTF-8")
//   {
//     req.headers['content-type'] = "text/plain;charset=UTF-8"
//   }

//   if(req.headers['content-type'] === "application/json"){
//     req.headers['content-type'] = "application/json"
//   }

//   return next()
// })

//routes
app.use(require('./routes/index'));

//public
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;