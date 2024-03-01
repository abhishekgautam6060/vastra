import React from "react";
import AliceCarousel from "react-alice-carousel";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";

// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarosel = ({data, sectionName}) => {

  // this is for buttons to use to sliding the photos
  // const[activeIndex, setActiveIndex]= useState(0);
  const responsive = {
    0: { items: 1},
    720: { items: 3 },
    1024: { items: 5},
  };

  // this is for slides button functions for next product or pervious product;
  // const slidePrev=()=>setActiveIndex(activeInedx-1);
  // const slideNext=()=>setActiveIndex(activeInedx+1);

  // const syncActiveIndex=({item})=>setActiveIndex(item);

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);

  return (
    <div className="border">
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1500}
          infinite
          responsive={responsive}          
        />
        {/* <button variant="contained" className="z-50 "sx={{position:'absolute',top:"8rem",right:"0rem", transform}}>
            <KeyboardArrowLeftIcon/>
        </button> */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;