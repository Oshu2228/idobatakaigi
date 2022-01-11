import firebase, { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfRu8Imr1aztj4rnXSmveHLG9vRwZ4EY8",
  authDomain: "idobatakaigi-with-ham-cf482.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-cf482",
  storageBucket: "idobatakaigi-with-ham-cf482.appspot.com",
  messagingSenderId: "430652251806",
  appId: "1:430652251806:web:eb1ea477fcdaab90c0e58f"
};

firebase.initializeApp(firebaseConfig)
const database =firebase.database()
const messageRef = database.ref("messages")

export const pushMessage = ({name, text}) => {
  messageRef.push({name, text})
}