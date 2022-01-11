import React,{useState} from 'react'
import { TextField } from '@material-ui/core'

import { pushMessage } from '../firebase'

const MessageField = ({name,setText,text}) => {
  const [isCompased, setIsCompased] = useState(false)
 
  return (
    <TextField  
      fullWidth={true}  
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e)=>{
        if(isCompased) return
        const text = e.target.value
        if(text === "") return
        if(e.key === "Enter"){
          pushMessage({name: "おにょ",text})
          setText("")
          e.preventDefault()
        }
      }}
      onCompositionStart={()=> setIsCompased(true)}
      onCompositionEnd={()=> setIsCompased(false)}
      value={text}
      />
  )
}

export default MessageField
