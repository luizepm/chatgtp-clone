import React from 'react'
import './ChatMessage.css'
import Avatar  from '../../assets/avatar'

// message - user | chatgpt
// message - aonde vai estar o prompt
const ChatMessage = ({message}) =>{
  return(
  
  <div className={`chat-message ${message.user === 'gpt' && "chatgpt"}`}>
    <div className='chat-message-center'>
      <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
        { message.user === "gpt" && <Avatar /> }
      </div>
      <div className='message'>
        {message.message}
      </div>
    </div>
  </div>
  )
}

export default ChatMessage