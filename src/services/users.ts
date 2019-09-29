import db from "../utils/firebase"
import {User} from "./types"

const usersRef = db.collection("users")

const usersService = {
  createUser: (req: User): Promise<User> => {
    return usersRef.add(req).then((res) =>
      usersService.getUserById(null, {userId: res.id}),
    )
  },

  getUserById: (_: any, params: {userId: string}): Promise<any> => {
    return usersRef.doc(params.userId).get().then((snapshot) => {
      if (!snapshot.exists) {
        throw new Error("No such user exists")
      }

      return {
        ...snapshot.data(),
        userId: snapshot.id,
      }
    })
  },

  getUsers: (): Promise<User[]> => {
    return usersRef.get().then((snapshot) => {
      const users: User[] = []
      snapshot.forEach((doc) => {
        const user = {
          ...doc.data(),
          userId: doc.id,
        }
        users.push(user)
      })

      return users
    })
  },
}

export default usersService
