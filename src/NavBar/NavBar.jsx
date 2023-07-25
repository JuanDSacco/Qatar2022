import React from 'react'
import '../style/style.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='divNavBar'>
            <ul className='ulNavBar'>
                <Link to={'/'}><li className='liNavBar'>Inicio</li></Link>
                <Link to={'/fixture'}><li className='liNavBar'>Fixture</li></Link>
                <Link to={'/d10s'}><li className='liNavBar'>D10S</li></Link>
            </ul>
        </div>
    )
}

export default NavBar
