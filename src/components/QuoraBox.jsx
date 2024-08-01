// import React from 'react'
import { Edit, LiveHelp, RateReview } from '@mui/icons-material'
import './css/quoraBox.css'
import { Avatar} from "@mui/material"
// import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
// import { useState } from 'react'
// import CloseIcon from '@mui/icons-material/Close'
// import {  ExpandMore, PeopleAltOutlined, } from '@mui/icons-material'


function QuoraBox() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [inputUrl, setInputUrl] = useState('');
  // const Close = (<CloseIcon/>);

  return (
    <div className="quoraBox">
      <div className="quoraBox__info" 
      // onClick={() => setIsModalOpen(true)} 
      >
        <Avatar />
        <div className='qurabox_input'>
          <h5>What do you want to ask or share ?</h5>
        </div>

      </div>
      <div className="quoraBox__quora"
      // onClick={() => setIsModalOpen(true)} 
      >
        <button>
          <LiveHelp/>
          Ask
        </button>

        <button className='middle'>
        <RateReview/>
          Answer
        </button>

        <button>
          <Edit/>
          Post
        </button>

        
      </div>
    </div>
  )
}

export default QuoraBox