import React from 'react'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Navbar from './components/header/Navbar'
import NewNav from './components/header/NewNav/NewNav'
import MainComp from './components/Home/MainComp'
import Mobile from './components/Mobile/Mobile'
import MobileDetails from './components/Mobile/MobileDetails'
import Register from './components/pages/Register'
import SignIn from './components/pages/SignIn'
import { useParams } from 'react-router-dom'
// import Page from './Page'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <NewNav/>

        <Routes>
          <Route path = '/' element = {<MainComp/>}/>
          <Route path='/signIn' element= {<SignIn/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/profile' element = {<h1 style={{marginTop: "100px"}}>Profile is rendered</h1>}/>
          <Route path = '/mobiles' element = {<Mobile/>}/>
          <Route path = '/best-seller' element = {<h1 style={{marginTop: "100px"}}>Best Sellers is rendered</h1>}/>
          <Route path = '/Fashion' element = {<h1 style={{marginTop: "100px"}}>Fashion is rendered</h1>}/>
          <Route path = '/Customer-Service' element = {<h1 style={{marginTop: "100px"}}>Customer Service is rendered</h1>}/>
          <Route path = '/Electronics' element = {<h1 style={{marginTop: "100px"}}>Electronics is rendered</h1>}/>
          <Route path = '/Prime' element = {<h1 style={{marginTop: "100px"}}>Prime is rendered</h1>}/>
          <Route path = '/Deals' element = {<h1 style={{marginTop: "100px"}}>Today's Deals is rendered</h1>}/>
          <Route path = '/Amazon-Pay' element = {<h1 style={{marginTop: "100px"}}>Amazon-Pay is rendered</h1>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/getproductOne/:id' element = {<h1>Here is the info</h1>}/>
          <Route path='/mobiles/:id' element = {<MobileDetails/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
