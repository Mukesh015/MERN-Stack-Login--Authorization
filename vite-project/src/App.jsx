import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Routes,Route} from 'react-router-dom' 
import Login from './Login'
// import Greet from './greet'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Greet />}></Route> */}
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App