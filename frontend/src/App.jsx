import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Rountes} from 'react-router-dom'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Rountes>
        <Route path='/' element={<Home/>} />
        
      </Rountes>
    </div>
  )
}

export default App
