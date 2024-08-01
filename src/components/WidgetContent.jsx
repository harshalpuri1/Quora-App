// import React from 'react'
import './css/WidgetContent.css'

function WidgetContent({widget_profile, altText,title,description}) {
  return (
    <div className="Widget_Contents">
        <div className="Widget_Content">
            <img src={widget_profile} alt="altText" />
            <div className="Widget_Content_title">
            <h5>{title}</h5>
            <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent