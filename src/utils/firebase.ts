import * as admin from "firebase-admin"

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const {FIREBASE_CLIENT_EMAIL = "", FIREBASE_PRIVATE_KEY = "", FIREBASE_PROJECT_ID = ""} = process.env

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    projectId: FIREBASE_PROJECT_ID,
  }),
  databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
})

export default admin.firestore()
