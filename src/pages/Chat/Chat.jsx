import React, { useContext, useEffect, useState } from 'react'
import "./Chat.css"
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { AppContext } from '../../context/AppContext'
import assets from '../../assets/assets'

const Chat = () => {

  const {chatData, userData} = useContext(AppContext);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if (chatData && userData) {
      setLoading(false)
    }
  },[chatData,userData])

  return (
    <div className="chat">
      {
        loading
        ?<div className="loading">
          <img src={assets.logo_icon} alt="" />
          <p className='loading'>Loading Express App <br/> please wait...</p>
        </div>
        :<div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
      }
    </div>
  )
}

export default Chat
