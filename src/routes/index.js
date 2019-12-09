const { Router } = require('express')
const router = Router();
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
})


const db = admin.firestore()


//routes


//get
router.get('/get-contacts',(req, res) => {
  let allContacts = db.collection('contacts')

  allContacts.get()
  .then(snapshot => {
    let response = []
    snapshot.forEach(e => {
      response.push({ id: e.id ,...e.data()})
    })
    res.send({ status: 200, data: response })
  })
  .catch(err => {
    res.send({ status: 500, error: err })
  })

})


//add
router.post('/add-contact', (req, res) => {
  const { body } = req
  const  newContact = {
    Firstname: body.Firstname,
    Lastname: body.Lastname,
    Email: body.Email,
    Phone: body.Phone,
  }

  db.collection('/contacts').add(newContact)
  .then(() => {
    res.send({ status: 200, message: 'contact added' })
  })
  .catch((err) => {
    res.send({ status: 500, message: err })
  })
})



module.exports = router