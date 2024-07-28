// import React from 'react'
import './css/quoraBox.css'
import { Avatar } from "@mui/material"

function QuoraBox() {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar/>
      </div>  
      <div className="quoraBox__quora">
        <h5>What is your question or link ?</h5>
      </div>  
    </div>
  )
}

export default QuoraBox