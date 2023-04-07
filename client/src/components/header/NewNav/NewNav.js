import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './newNav.css'

const NewNav = () => {
  return (
    <div className='newnav'>
        <ul className="lefty">
          <li><NavLink to='/' className='all'>
                  <ShoppingCartIcon id="icon" style={{color: "white", border: "none"}}/>
                  <p style={{border: "none"}}>All</p>
              </NavLink>
          </li>

          <li><NavLink className='links' to='/mobiles'>Mobiles</NavLink></li>
          <li><NavLink className='links' to='/best-seller'>Best Sellers</NavLink></li>
          <li><NavLink className='links' to='/Fashion'>Fashion</NavLink></li>
          <li><NavLink className='links' to='/Customer-Service'>Customer Service</NavLink></li>
          <li><NavLink className='links' to='/Electronics'>Electronics</NavLink></li>
          <li><NavLink className='links' to='/Prime'>Prime</NavLink></li>
          <li><NavLink className='links' to='/Deals'>Today's Deals</NavLink></li>
          <li><NavLink className='links' to='/Amazon-Pay'>Amazon Pay</NavLink></li>
        </ul>

      <a href='https://www.primevideo.com/region/eu/?ref_=dvm_crs_in_s_gw_swm_dk_np_hppyfmly'>
        <img src="./nav.jpg" alt="amazon prime" className="right"/>
      </a>
    </div>
  )
}

export default NewNav
