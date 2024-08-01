// import React from 'react'
import './css/Spaces.css'
import Notifications from './Notifications'

function Spaces() {
  return (
    <div className='spaces'>
      <div className='Notifications'>
        <h5>Notifications</h5>
        <p>Settings</p>
      </div>
      <Notifications/>
    </div>
  )
}

export default Spaces