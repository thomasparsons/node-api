import * as admin from "firebase-admin"
import serviceAccount from "./node-api-c2cd0-firebase-adminsdk-0l081-fe4023f656.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-api-c2cd0.firebaseio.com",
})

export default admin.firestore()
