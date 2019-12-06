const { Router } = require('express')
const router = Router();
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  databaseURL: 'https://fir-node-76ddb.firebaseio.com/'
})

const db = admin.database()

//routes
router.get('/',(req, res) => {
  db.ref('contacts').once('value',(snapshot)=> {
    const data = snapshot.val()
    res.render('index', { contacts: data })
  })
})

//add
router.post('/new-contact',(req, res) => {
  const { body } = req
  const newContact = {
    Firstname: body.Firstname,
    Lastname: body.Lastname,
    Email: body.Email,
    Phone: body.Phone
  }

  db.ref('contacts').push(newContact)
  res.redirect('/')
})

//delete
router.get('/delete-contact/:id', (req, res) => {
  db.ref(`contacts/${req.params.id}`).remove()
  res.redirect('/')
})

module.exports = router