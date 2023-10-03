import React from 'react'
import '../style/style.scss'
import Img1 from '../assets/AssetsMessi/1.jpg'
import Img2 from '../assets/AssetsMessi/2.jpg'
import Img3 from '../assets/AssetsMessi/3.jpg'
import Img4 from '../assets/AssetsMessi/4.jpg'
import Img5 from '../assets/AssetsMessi/5.jpg'
import Img6 from '../assets/AssetsMessi/6.jpg'
import Img7 from '../assets/AssetsMessi/7.jpg'
import Img8 from '../assets/AssetsMessi/8.jpg'
import Img9 from '../assets/AssetsMessi/9.jpg'
import Img10 from '../assets/AssetsMessi/10.jpg'
import Img11 from '../assets/AssetsMessi/11.jpg'
import Img12 from '../assets/AssetsMessi/12.jpg'
import Img13 from '../assets/AssetsMessi/13.jpg'
import Img14 from '../assets/AssetsMessi/14.jpg'
import Img15 from '../assets/AssetsMessi/15.jpg'
import Img16 from '../assets/AssetsMessi/16.jpg'
import Img17 from '../assets/AssetsMessi/17.jpg'
import Img18 from '../assets/AssetsMessi/18.jpg'


const Carousel = () => {
    return (
        <div className='carouselContainer'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id='imgCarousel' src={Img1} className="d-block w-100" alt={Img1}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img2} className="d-block w-100" alt={Img2}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img3} className="d-block w-100" alt={Img3}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img4} className="d-block w-100" alt={Img4}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img5} className="d-block w-100" alt={Img5}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img6} className="d-block w-100" alt={Img6}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img7} className="d-block w-100" alt={Img7}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img8} className="d-block w-100" alt={Img8}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img9} className="d-block w-100" alt={Img9}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img10} className="d-block w-100" alt={Img10}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img11} className="d-block w-100" alt={Img11}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img12} className="d-block w-100" alt={Img12}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img13} className="d-block w-100" alt={Img13}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img14} className="d-block w-100" alt={Img14}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img15} className="d-block w-100" alt={Img15}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img16} className="d-block w-100" alt={Img16}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img17} className="d-block w-100" alt={Img17}/>
                    </div>
                    <div className="carousel-item">
                        <img id='imgCarousel' src={Img18} className="d-block w-100" alt={Img18}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
