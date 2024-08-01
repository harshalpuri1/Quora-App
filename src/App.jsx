import './App.css'
import Quora from './components/Quora'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notification from './components/Notification'


function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Quora/>}></Route>
        <Route path='/Notification' element={
          <Notification/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App