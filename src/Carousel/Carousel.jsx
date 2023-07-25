import React from 'react'
import '../style/style.scss'
import Australia from '../assets/AssetsCarousel/australia.jpg';
import Croacia from '../assets/AssetsCarousel/croacia.jpg';
import Final from '../assets/AssetsCarousel/final.jpg'
import Mexico from '../assets/AssetsCarousel/mexico.jpg'
import Plantel from '../assets/AssetsCarousel/plantel.jpg'


const Carousel = () => {
    return (
        <div className='carouselContainer'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id='imgCarousel' src={Plantel} class="d-block w-100" alt={Plantel}/>
                    </div>
                    <div class="carousel-item">
                        <img id='imgCarousel' src={Australia} class="d-block w-100" alt={Australia}/>
                    </div>
                    <div class="carousel-item">
                        <img id='imgCarousel' src={Croacia} class="d-block w-100" alt={Croacia}/>
                    </div>
                    <div class="carousel-item">
                        <img id='imgCarousel' src={Mexico} class="d-block w-100" alt={Mexico}/>
                    </div>
                    <div class="carousel-item">
                        <img id='imgCarousel' src={Final} class="d-block w-100" alt={Final}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
