// import React from 'react'
import { Avatar } from '@mui/material'
import './css/Post.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOnOutlined, ShareOutlined } from '@mui/icons-material'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


function Post({UserName,Timestamp,testquestion,imageUrl, altText}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Close = (<CloseIcon />);


    return (
        <div className='post' 
        style={{
            marginTop: "10px"
        }}
        >
            <div className='post__info'>
                <Avatar />
                <h4>{UserName}</h4>
                <small>{Timestamp}</small>
            </div>

            <div className='post__body'>
                <div className="post__Question">
                    <p>{testquestion}</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='post__btnAnswer'>Answer</button>
                <Modal
                    open={isModalOpen}
                    CloseIcon={Close}
                    onClose={() => setIsModalOpen(false)}
                    center
                    closeOnEsc
                    closeOnOverlayClick={false}
                    styles={{
                        overlay: {
                            height: "auto",
                        }
                    }}
                >
                    <div className='modal__question'>
                        <h1>{testquestion}</h1>
                        <p>Asked by {" "}
                        <span className='name'>{UserName}</span> on <span className='name'>{Timestamp}</span>
                            </p> 
                    </div>

                    <div className='modal__answer'>
                        <ReactQuill placeholder='Enter Your Answer'/>
                    </div>

                    <div className='modal__button'>
                    <button className='cancel' onClick={() => setIsModalOpen(false)} >
              Cancel
            </button>
            <button type='submit' className='add'  >
              Submit
            </button>
                    </div>
                </Modal>
            </div>
            <div className= 'post_Img'>
                <img src={imageUrl} alt={altText} />
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>
                    <div className='post__footerAction_up'><ArrowUpwardOutlined /></div>
                    <div className='post__footerAction_down'> <ArrowDownwardOutlined /></div>
                </div>
                <RepeatOnOutlined />
                <ChatBubbleOutline />
                <div className='post__footerLeft'>
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
{/* 
            <p >1 Answer</p>
            <div style={{
                marginTop: "5px",
                paddingTop: "5px",
                borderTop: "1px solid lightgray"

            }} className="post__answer">
                <div className='post-answer-container'>
                    <div className='post-answered'>
                        <Avatar />
                        <div className='post-info' >
                            <p>Username</p>
                            <span>Timestamp</span>
                        </div>
                    </div>
                    <div className='post-answer'>This is test ans</div>
                </div>
            </div> */}
        </div>
    )
}

export default Post