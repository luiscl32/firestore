const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path') 


const app = express()
const PORT = 3001

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

//public
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;