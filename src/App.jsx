import { Fragment } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom'
import Basket from './components/Basket'
import LoginForm from './Login/LoginForm'




function App() {

  return (
    <>
      <Fragment>
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route path='/basket' element={<Basket />}  />
          <Route path='./login/loginform' element={<LoginForm />} />
        </Routes>
      </Fragment>
    </>
  )
}

export default App
