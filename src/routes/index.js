const { Router } = require('express')
const router = Router();
const db = require('../config')
//contacts
const { addContact, getContacts, deleteContact, updateContact } = require('../services/contacts')

//------------------ CONTACTS --------------//
router.get('/get-contacts',(req, res) => getContacts(req,res,db))
router.post('/add-contact', (req, res) => addContact(req,res,db))
router.post('/delete-contact',(req, res) => deleteContact(req, res, db))
router.post('/update-contact', (req, res) => updateContact(req, res, db))



module.exports = router