import React from 'react'
import Logo from './imgs/logo-viptech.png'


export default function Header() {

  
    return (
        <header className='header'>
            <div className='header-container'>
                <img src={Logo} alt='Viptech' className='header-logo-img'/>
            </div>
            
        </header>
    )
}