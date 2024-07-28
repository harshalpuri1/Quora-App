import HomeIcon from '@mui/icons-material/Home'
// import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlinedIcon'
import { AssignmentTurnedIn, FeaturedPlayListOutlined, Notifications, PeopleAltOutlined, Search } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import './css/QuoraHeader.css'

function QuoraHeader() {
  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src='https://data.textstudio.com/output/sample/animated/8/4/7/6/quora-3-6748.gif' alt='logo' />
          </div>
          <div className='qHeader__icons'>
            <div className='qHeader-icon'><HomeIcon /></div>
            <div className='qHeader-icon'><FeaturedPlayListOutlined /></div>
            <div className='qHeader-icon'><AssignmentTurnedIn /></div>
            <div className='qHeader-icon'><PeopleAltOutlined /></div>
            <div className='qHeader-icon'><Notifications /></div>


          </div>
        
        <div className='qHeader__input'><Search />
          <input type='text' placeholder='Search Quora' />
        </div>
        <div className='qHeader__Rem'>
          <Avatar />
        </div>
        <Button className='modal__buttons'>Add Question</Button>
      </div>
    </div>
  )
}

export default QuoraHeader