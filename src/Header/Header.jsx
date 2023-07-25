import React from 'react'
import NavBar from '../NavBar/NavBar'
import Bandera from '../assets/AssetsBandera/bandera.png'

const Header = () => {
    return (
        <div className='divHeader'>
            <div className='divSecuHeader'>
                <img className='imgBandera' src={Bandera} alt={Bandera}/>
                <h1 className='h1Header'>ARGENTINA - QATAR 2022</h1>
            </div>
            <NavBar/>
        </div>
    )
}   

export default Header
