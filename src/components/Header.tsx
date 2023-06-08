import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  return (
    <>
    <div className='NAVBAR'>
        <div className='first-cont'>
        <h3>Edwin Rodriguez</h3>
        </div>
        <div className='section-cont'>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>CONTACTS</li>
          </ul>
        </div>
       <AiOutlineMenu color='white' size='20px'/>
    </div>
    </>
  )
}

export default Header