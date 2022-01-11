import React,{useState,useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {messagesRef} from "../firebase"

const useStyles = makeStyles({
  root:{
    gridRow:1
  }
})

const MessageList = () => {
  const [message, setMessage] = useState([])
  const classes = useStyles()

  useEffect(()=>{
    messagesRef
    .orderByKey()
    .limitToLast(3)
    .on("value", (snapshot)=>{
     const messages = snapshot.val()
     if(messages === null) return
     const entries = Object.entries(messages)
     const newMessages = entries.map((entry) => {
       const [key, nameAndText] = entry
       return {key, ...nameAndText}
     })
     setMessage(newMessages)
    })
  },[])
  return (
    <div className={classes.root}> 
      Message List
    </div>
  )
}

export default MessageList
