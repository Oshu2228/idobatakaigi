import React,{useState} from 'react'
import { TextField } from '@material-ui/core'

import { pushMessage } from '../firebase'

const MessageField = ({inputEl,name,setText,text}) => {
  const [isCompased, setIsCompased] = useState(false)
 
  return (
    <TextField  
    autoFocus
      fullWidth={true}  
      inputRef={inputEl}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e)=>{
        if(isCompased) return
        const text = e.target.value
        if(text === "") return
        if(e.key === "Enter"){
          pushMessage({name: name,text})
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
