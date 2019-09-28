import db from "../utils/firebase"

import {User} from "./types"

const usersRef = db.collection("users")

const usersService = {
  getUsers: (): Promise<User[]> => {
    return usersRef.get().then((snapshot: any) => {
      if (!snapshot.exists) {
        return {
          error: "No such document!",
        }
      }

      console.log("Document data:", snapshot.data())
      return {
        users: [],
      }
    })
  },
  getUserById: (_: any, params: {userId: string}): Promise<User | null> => {
    return usersRef.doc(params.userId).get().then((snapshot: any) => {
      if (!snapshot.exists) {
        return {
          error: "No such user exists!",
        }
      }
      return snapshot.data()
    })
  },
}

export default usersService
