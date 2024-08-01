// import React from 'react'
import './css/Widget.css'
import WidgetContent from './WidgetContent'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget_header'>
        <h5>Spaces to follow</h5>
      </div>
      <div className='widget_contents'>
        <WidgetContent
          widget_profile="https://img.freepik.com/premium-vector/ai-generated-icon-artificial-intelligence-generated-vector_849264-816.jpg"
          altText="Profile"
          title="Mobile App Programmer"
          description="I am a mobile app programmer with a passion for creating innovative and user-friendly apps."
        />

        <WidgetContent
          widget_profile="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/graphic-designer-logo-template-9458b639d3e7333cb50cf5db40be7850_screen.jpg?ts=1658998865"
          altText="Profile"
          title="Graphic Designer"
          description="designers use their creative prowess to research, design, and develop new products"
        />
      </div>
    </div>
  )
}

export default Widget