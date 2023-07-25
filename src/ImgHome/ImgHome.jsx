import React from 'react'
import Mascota from '../assets/AssetsMascota/mascota.png'

const ImgHome = () => {
    return (
        <div className='divImgMascota'>
            <img className='imgMascota' src={Mascota} alt={Mascota}/>
        </div>
    )
    }

export default ImgHome
