import React from 'react'
import FixtureContainer from '../../FixtureContainer/FixtureContainer'
import Arabia from '../../assets/AssetsBandera/arabia.png'
import Mexico from '../../assets/AssetsBandera/mexico.png'
import Polonia from '../../assets/AssetsBandera/polonia.png'
import Australia from '../../assets/AssetsBandera/australia.png'
import Holanda from '../../assets/AssetsBandera/holanda.png'
import Coracia from '../../assets/AssetsBandera/croacia.png'
import Francia from '../../assets/AssetsBandera/francia.png'

const FixtureDemo = () => {
    return (
        <div>
            <FixtureContainer  resul1='1' resul2='2' team2='Arabia' bandera2={Arabia} estadio='Lusail' fecha='22/11' instancia='Fase de grupos'/>
            <FixtureContainer  resul1='2' resul2='0' team2='México' bandera2={Mexico} estadio='Lusail' fecha='26/11' instancia='Fase de grupos'/> 
            <FixtureContainer resul1='2' resul2='0' team2='Polonia' bandera2={Polonia} estadio='974' fecha='30/11' instancia='Fase de grupos'/>
            <FixtureContainer resul1='2' resul2='1' team2='Australia' bandera2={Australia} estadio='Ahmad Bin Ali' fecha='3/12' instancia='8vos'/>
            <FixtureContainer resul1='2 (4)' resul2='2 (3)' team2='Paises Bajos' bandera2={Holanda} estadio='Lusail' fecha='9/12' instancia='4tos'/>
            <FixtureContainer resul1='3' resul2='0' team2='Croacia' bandera2={Coracia} estadio='Lusail' fecha='13/12' instancia='Semi'/>
            <FixtureContainer resul1='3 (4)' resul2='3 (2)' team2='Francia' bandera2={Francia} estadio='Lusail' fecha='18/12' instancia='Final'/>
        </div>
    )
}

export default FixtureDemo
