
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Track from './components/Track'
import './App.css'
import NotFound from './components/NotFound'
import { UserContext } from './contexts/UserContext'
import { useEffect, useState } from 'react'
import Private from './components/Private'
import Diet from './components/Diet'
import ForgotPassword from './components/Forgot-password'
import Otp from './components/Otp'
import Unregister from './components/Un-register'




function App() {

  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("nutrify-user")))







  return (
    
    <UserContext.Provider value={{loggedUser,setLoggedUser}}>
      <BrowserRouter>
      <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/track' element={<Private Component={Track}/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path="/diet" element={<Private Component={Diet}/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path='/un-register' element={<Unregister/>}/>
              
              
             
              
               
                <Route path="/otp" element={<Otp/>}/>
              
            </Routes>
      </BrowserRouter>
            


    </UserContext.Provider>


    
  )
}

export default App
