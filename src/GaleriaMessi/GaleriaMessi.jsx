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
import { useState } from 'react'

const GaleriaMessi = () => {

    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        if (enlargedImage === imageUrl) {
        setEnlargedImage(null);
        } else {
        setEnlargedImage(imageUrl);
        }
    }

    return (
        <div className='image-grid'>

            <img 
            src={Img1} 
            alt='img1' 
            className={enlargedImage === Img1 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img1)} id='imgGaleriaMessi'/>

            <img 
            src={Img2}
            alt='Img2' className={enlargedImage === Img2 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img2)} id='imgGaleriaMessi'/>

            <img 
            src={Img3} 
            alt='img3' 
            className={enlargedImage === Img3 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img3)} id='imgGaleriaMessi'/>

            <img 
            src={Img4} 
            alt='img4' 
            className={enlargedImage === Img4 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img4)} id='imgGaleriaMessi'/>

            <img 
            src={Img5} 
            alt='img5'
            className={enlargedImage === Img5 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img5)} id='imgGaleriaMessi'/>

            <img
            src={Img6} 
            alt='img6' 
            className={enlargedImage === Img6 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img6)} id='imgGaleriaMessi'/>

            <img 
            src={Img7} 
            alt='img7'
            className={enlargedImage === Img7 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img7)} id='imgGaleriaMessi'/>

            <img 
            src={Img8} 
            alt='img8'
            className={enlargedImage === Img8 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img8)} id='imgGaleriaMessi'/>

            <img 
            src={Img9} 
            alt='img9' 
            className={enlargedImage === Img9 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img9)} id='imgGaleriaMessi'/>

            <img 
            src={Img10} 
            alt='Img10'
            className={enlargedImage === Img10 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img10)} id='imgGaleriaMessi'/>

            <img 
            src={Img11} 
            alt='Img11' 
            className={enlargedImage === Img11 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img11)} id='imgGaleriaMessi'/>

            <img 
            src={Img12} 
            alt='img12'
            className={enlargedImage === Img12 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img12)} id='imgGaleriaMessi'/>

            <img 
            src={Img13}
            alt='Img13'
            className={enlargedImage === Img13 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img13)} id='imgGaleriaMessi'/>

            <img 
            src={Img14} 
            alt='img14'
            className={enlargedImage === Img14 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img14)} id='imgGaleriaMessi'/>

            <img 
            src={Img15} 
            alt='img15' 
            className={enlargedImage === Img15 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img15)} id='imgGaleriaMessi'/>

            <img 
            src={Img16} 
            alt='img16' 
            className={enlargedImage === Img16 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img16)} id='imgGaleriaMessi'/>

            <img 
            src={Img17} 
            alt='img17'
            className={enlargedImage === Img17 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img17)} id='imgGaleriaMessi'/>

            <img 
            src={Img18} 
            alt='img18' 
            className={enlargedImage === Img18 ? 'enlarged' : ''}
            onClick={() => handleImageClick(Img18)} id='imgGaleriaMessi'/>
            
        </div>
        )
    }

export default GaleriaMessi; 
