import React from 'react'
import Carousel from '../../Carousel/Carousel'
import ParrafoHome from '../../ParrafoHome/ParrafoHome'
import ImgHome from '../../ImgHome/ImgHome'

const Home = () => {
    return (
        <div className='divPrincipalHome'>
            <Carousel/>
            <ParrafoHome/>
            <ImgHome/>
        </div>
    )
}

export default Home
