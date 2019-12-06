const { Router } = require('express')
const router = Router();
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
})


const db = admin.firestore()


//routes


//get



//add
router.post('/add-contact', (req, res) => {
  const { body } = req
  const  newContact = {
    Firstname: body.Firstname,
    Lastname: body.Lastname,
    Email: body.Email,
    Phone: bidy.Phone,
  }

  db.collection('contacts').add(...newContact)
  .then(() => {
    res.send({ status: 200, message: 'contact added' })
  })
  .catch((err) => {
    res.send({ status: 500, message: err })
  })
})



module.exports = router