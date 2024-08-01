import HomeIcon from '@mui/icons-material/Home'
// import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlinedIcon'
import { AssignmentTurnedIn, ExpandMore, FeaturedPlayListOutlined, Notifications, PeopleAltOutlined, Search } from '@mui/icons-material'
import { Avatar, Button, Input } from '@mui/material'
import './css/QuoraHeader.css'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom';
// import './css/modal.css'
// import Notification from './Notification';

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const closeIcon  = (<CloseIcon />);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('question');



  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'
        onClick={() => navigate('/')}
        >
          <img src='https://qph.cf2.quoracdn.net/main-qimg-965648a490877f1cd9540a71a1ebd092' alt='logo' />
        </div>
        <div className='qHeader__icons'>
          <div className='qHeader-icon'
          onClick={() => navigate('/')}
          ><HomeIcon />
          </div>
          <div className='qHeader-icon'><FeaturedPlayListOutlined /></div>
          <div className='qHeader-icon'><AssignmentTurnedIn /></div>
          <div className='qHeader-icon'><PeopleAltOutlined /></div>
          <div className='qHeader-icon '
          onClick={() => navigate('/Notification')}
          ><Notifications /></div>

        </div>

        <div className='qHeader__input'><Search />
          <input type='text' placeholder='Search Quora' />
        </div>
        <div className='qHeader__Rem'>
          <Avatar />
        </div>
        <Button className='button_Add' onClick={() => setIsModalOpen(true)} variant="contained">Add Question
          <ExpandMore />
        </Button>
        
        <Modal
        open={isModalOpen}
        closeIcon={closeIcon}
        onClose={() => setIsModalOpen(false)}
        center
        closeOnEsc
        closeOnOverlayClick={false}
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <div className='modal__header'>
          <div className='modal__tabs'>
            <h3 className={activeTab === 'question' ? 'active' : ''} onClick={() => setActiveTab('question')}>
              Add Question
            </h3>
            <h3 className={activeTab === 'post' ? 'active' : ''} onClick={() => setActiveTab('post')}>
              Create Post
            </h3>
          </div>
        </div>
        {activeTab === 'question' ? (
          <div className='modal__body'>
            <div className='modal__info'>
              <Avatar className='avatar' />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
              </div>
            </div>
            <div className="modal__Field">
              <Input type='text' placeholder="Start your question with 'What', 'How', 'Why', etc. " fullWidth />
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                <Input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "none",
                    borderRadius: "5px"
                  }}
                  placeholder='Optional: Include a link that gives context'
                  fullWidth
                />
                {inputUrl !== "" && (
                  <img
                    style={{ height: "200px", objectFit: "contain", marginTop: '10px' }}
                    src={inputUrl}
                    alt="Preview"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='modal__body'>
            <div className='modal__info'>
              <Avatar className='avatar' />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
              </div>
            </div>
            <div className="modal__Field">
              <Input type='text' placeholder="Say something..." fullWidth multiline rows={4} />
            </div>
          </div>
        )}
        <div className='modal__footer'>
          <Button onClick={() => setIsModalOpen(false)} variant="outlined" color="secondary" style={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            {activeTab === 'question' ? 'Add Question' : 'Post'}
          </Button>
        </div>
      </Modal>
      </div>
    </div>
  )
}

export default QuoraHeader