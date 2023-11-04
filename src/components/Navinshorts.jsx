import React from 'react'
import './Navinshorts.css'
import Hamburgerdrawer from './Hamburgerdrwaer'
const Navinshorts = ({setcategory}) => {
  return (
    <div className='nav'>
        <div className='icon'><Hamburgerdrawer setcategory={setcategory}/></div>
        <img style={{cursor:"pointer"}} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png " height="50px"  alt="logo" />
    </div>
  )
}

export default Navinshorts