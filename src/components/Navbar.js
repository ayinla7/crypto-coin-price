import React from 'react';
// import coin from '../Assets/3338958-business-tools-coins_106885.png';
import './Navbar.css'
import { SiBitcoin } from 'react-icons/si'
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom'

export default function Navbar() {

    return (
        
        <Link to='/'>
            <div>
                    <div className='navbar'>
                        <SiBitcoin className='icon' />
                        <h1>Coin <span className='purple'>Search</span></h1>
                    </div>
                </div>
        </Link>
 
  )
}
