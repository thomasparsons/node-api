import db from "../utils/firebase"

const usersService = {
  getUsers: (): Promise<any> => {
    const userRef = db.collection("users")
    userRef.get()
    .then((snapshot: any) => {
      console.log(snapshot.value())
    })

    return Promise.resolve({})
  },
  getUserById: (req: any): Promise<any> => {
    console.log(req)
    return Promise.resolve({})
  },
}

export default usersService
