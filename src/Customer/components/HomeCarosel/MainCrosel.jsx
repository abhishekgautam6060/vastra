import React from 'react'
import { mainCaroselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';



const MainCrosel = () => {
    const items = mainCaroselData.map((item)=> (<img 
    style={{ width: '100%', height: 'auto', cursor: 'pointer', zIndex:'-10' }}
    role='presentation' 
    src={item.image} 
    alt=''/>
    ));

  return (
    <div className="carousel-container">
    <AliceCarousel        
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
    />
    </div>
  )
}

export default MainCrosel;
