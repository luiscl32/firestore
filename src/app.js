const express = require('express')
const morgan = require('morgan')
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
app.use(express.urlencoded({ extended: false }))

//routes
app.use(require('./routes/index'));

//public
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;