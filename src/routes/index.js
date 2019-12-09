const { Router } = require('express')
const router = Router();
const admin = require('firebase-admin')
//contacts
const { addContact, getContacts } = require('../services/contacts')



admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
})

const db = admin.firestore()


//------------------ CONTACTS --------------//
router.get('/get-contacts',(req, res) => getContacts(req,res,db))
router.post('/add-contact', (req, res) => addContact(req,res,db))



module.exports = router