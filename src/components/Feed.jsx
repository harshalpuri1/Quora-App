// import React from 'react'
import './css/Feed.css'
import Post from './Post'
import QuoraBox from './QuoraBox'

function Feed() {
  return (
    <div className='feed'>
      <QuoraBox />
      <Post 
              UserName="Google"
              Timestamp="9 August"
              testquestion="GIF is the abbreviation for Graphic Interchange Format A GIF may contain more than one frame, so it can be animated. Animated GIFs are actually fairly easy to create"
              imageUrl="https://i.gifer.com/7dEn.gif"
      />
      <Post
        UserName="Harry Potter"
        Timestamp="10 April"
        testquestion="Qoura AD Formats and Specs"
        imageUrl="https://i.ytimg.com/vi/UHEAxlv-JuM/maxresdefault.jpg"

      />
      <Post
        UserName="Harshal"
        Timestamp="19 July"
        testquestion="This is the sample post for the Quora app"
        imageUrl="https://wisetrolley.com/wp-content/uploads/2023/03/Quora-Logo-T-shirt-Black-4.jpg"

      />
      <Post
        UserName="Harry Potter"
        Timestamp="1 July"
        testquestion="This is the sample post created by Harshal Puri"
        imageUrl="https://cdn3.vectorstock.com/i/1000x1000/85/22/logo-quora-website-icon-social-media-vector-19548522.jpg"

      />

    </div>
  )
}

export default Feed