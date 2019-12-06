const { Router } = require('express')
const router = Router();

//routes
router.get('/',(req, res) => {
  res.render('index.hbs')
})


module.exports = router