import firebase from "firebase/app"

import {Slack, SlackResponse} from "./types"

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  appId: "1:171970237141:web:e63a3319ac96b8d60ac85c",
  appName: "Node api",
  authDomain: "node-api-c2cd0.firebaseapp.com",
  databaseURL: "https://node-api-c2cd0.firebaseio.com",
  measurementId: "G-4YXCJ1YCP9",
  messagingSenderId: "171970237141",
  projectId: "node-api-c2cd0",
  storageBucket: "node-api-c2cd0.appspot.com",
})

const usersService = {
  getUsers: (slackReqObj: Slack): Promise<SlackResponse> => {

  const database = firebase.database()

  database.child("users").on("value", (snapshot) => {
    console.log(snapshot)
  })

  // const ref = firebase.app().database().ref()
  // ref.once("value")
  //   .then((snap) => {
  //   console.log(`snap.val()`, snap.val())
  // })

  const slackResponse = {
    attachments: [{
      color: "#000000",
      text: "hello world!",
    }],
    channel: slackReqObj.channel_id,
    response_type: "in_channel",
  }

  return Promise.resolve(slackResponse)
  },
}

export default usersService
