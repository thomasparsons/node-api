import {DocumentSnapshot, QuerySnapshot} from "@firebase/firestore-types"

import db from "../utils/firebase"
import {User} from "./types"

const usersRef = db.collection("users")

const usersService = {
  createUser: (req: User): Promise<User> => {
    return usersRef.add(req).then((res: any) =>
      usersService.getUserById(null, {userId: res.id}),
    )
  },

  getUserById: (_: any, params: {userId: string}): Promise<User | Error> => {
    return usersRef.doc(params.userId).get().then((snapshot: DocumentSnapshot) => {
      if (!snapshot.exists) {
        throw new Error("No such user exists")
      }

      return {
        ...snapshot.data(),
        id: snapshot.id,
      }
    })
  },

  getUsers: (): Promise<User[]> => {
    return usersRef.get().then((snapshot: QuerySnapshot) => {
      const users: any[] = []
      snapshot.forEach((doc: DocumentSnapshot) => {
        const user = {
          id: doc.id,
          ...doc.data(),
        }
        users.push(user)
      })

      return users
    })
  },
}

export default usersService
