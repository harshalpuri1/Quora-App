// import React from 'react'

import Filters from "./Filters"
import Spaces from "./Spaces"
import QuoraHeader from "./QuoraHeader"


function Notification() {
  return (
    <div style={{
      display: 'flex',
      // flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      justifyContent:'center',
      marginTop:"55px"
      // width: '90vw%'

    }}>
      <QuoraHeader/>
        <Filters/>
        <Spaces/>

    </div>
  )
}

export default Notification