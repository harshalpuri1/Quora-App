import QuoraHeader from './QuoraHeader'
import Sidebar from './Sidebar'
import './css/Quora.css'
import Widget from './Widget'
import Feed from './Feed'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import QuoraHeader from './QuoraHeader';
// import Notification from './Notification';


function Quora() {
  return (
    <div className='quora'>
      <div className="App">
        <QuoraHeader />
      </div>
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>

      </div>
    </div>
  )
}

export default Quora
