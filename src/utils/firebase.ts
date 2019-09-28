import * as admin from "firebase-admin"

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: process.env.firebase_client_email,
    privateKey: process.env.firebase_private_key,
    projectId: process.env.firebase_project_id,
  }),
  databaseURL: `https://${process.env.project_id}.firebaseio.com`,
})

export default admin.firestore()
