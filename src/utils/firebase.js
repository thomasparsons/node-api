import * as admin from "firebase-admin"

admin.initializeApp({
  credential: admin.credential.cert({
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    client_email: process.env.firebase_client_email,
    client_id: process.env.firebase_client_id,
    client_x509_cert_url: process.env.firebase_client_cert,
    private_key: process.env.firebase_private_key,
    private_key_id: process.env.firebase_private_key_id,
    project_id: process.env.firebase_project_id,
    token_uri: "https://oauth2.googleapis.com/token",
    type: "service_account",
  }),
  databaseURL: `https://${process.env.project_id}.firebaseio.com`,
})

export default admin.firestore()
