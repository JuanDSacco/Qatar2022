import React from 'react'
import Argentina from '../assets/AssetsBandera/argentina.png'


const FixtureContainer = ({bandera2,resul1,resul2,team2,estadio,fecha,instancia}) => {
    return (
        <div className='divContainer'>
            <div className='divPrincipal'>
                <div className='divPaises'>
                    <h1>Argentina</h1>
                    <img className='imgFixture' src={Argentina} alt='bandera'/>
                </div>
                <div>
                    <h2 className='divResultado'>{resul1}</h2>
                </div>
                <div>
                    <h2 className='divResultado'>-</h2>
                </div>
                <div>
                    <h2 className='divResultado'>{resul2}</h2>
                </div>
                <div className='divPaises'>
                    <h1>{team2}</h1>
                    <img className='imgFixture' src={bandera2} alt='bandera'/>
                </div>
            </div>
            <div className='divDatos'>
                <h3>{instancia}</h3>
                <h3>Estadio: {estadio}</h3>
                <h3>{fecha}</h3>
            </div>
        </div>
    )
}

export default FixtureContainer
