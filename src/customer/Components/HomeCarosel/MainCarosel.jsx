import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCaroselData';

const MainCarosel = () => {

    const items = MainCarouselData.map((item)=> <img className='cursor-pointer' src={item.image} alt=" " />)
  return (
    <div>
         <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
      
    </div>
  );
}

export default MainCarosel;


// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { MainCarouselData } from './MainCaroselData';
// import { useNavigate } from 'react-router-dom';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const navigate = useNavigate(); 
// const items = MainCarouselData.map((item)=> <img className='cursor-pointer' src={item.image} alt=" " />)

// const MainCarosel = () => (
//     return(
//      <AliceCarousel
//         mouseTracking
//         items={items}
//         controlsStrategy="alternate"
//     />)
// );

// export default MainCarosel;