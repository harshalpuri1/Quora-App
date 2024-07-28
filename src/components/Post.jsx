// import React from 'react'
import { Avatar } from '@mui/material'
import './css/Post.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOnOutlined, ShareOutlined } from '@mui/icons-material'
function Post() {
    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar />
                <h4>User Name</h4>
                <small>Timestamp</small>
            </div>

            <div className='post__body'>
                <p>This is test question</p>
                <button className='post__btnAnswer'>Answer</button>
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
            <p >1 Answer</p>
            <div style={{
                marginTop:"5px",
                paddingTop:"5px",
                borderTop:"1px solid lightgray"

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
            </div>
        </div>
    )
}

export default Post