import React from 'react'
import ParrafoHome from '../../ParrafoHome/ParrafoHome'
import ImgHome from '../../ImgHome/ImgHome'
import Team from '../../assets/AssetsTeam/team.jpg'

const Home = () => {
    return (
        <div className='divPrincipalHome'>
            <img className='imgHome' src={Team} alt="Plantel argentino campeón del mundo" />
            <ParrafoHome/>
            <ImgHome/>
        </div>
    )
}

export default Home
