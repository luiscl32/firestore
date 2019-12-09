
//GETS
const getContacts = (req, res, db) => {
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
}

exports.getContacts = getContacts

//POST
const addContact = (req, res, db) => {
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
}

exports.addContact = addContact