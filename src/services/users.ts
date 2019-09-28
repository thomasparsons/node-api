import {DocumentSnapshot, QuerySnapshot} from "@firebase/firestore-types"

import db from "../utils/firebase"
import {User} from "./types"

const usersRef = db.collection("users")

const usersService = {
  getUserById: (_: any, params: {userId: string}): Promise<User | Error> => {
    return usersRef.doc(params.userId).get().then((snapshot: DocumentSnapshot) => {
      if (!snapshot.exists) {
        throw new Error("No such user exists")
      }
      return snapshot.data()
    })
  },

  getUsers: (): Promise<User[]> => {
    return usersRef.get().then((snapshot: QuerySnapshot) => {
      const users: any[] = []
      snapshot.forEach((doc: DocumentSnapshot) => users.push(doc.data()))
      return users
    })
  },
}

export default usersService
