const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
})

const db = admin.firestore()

module.exports = db