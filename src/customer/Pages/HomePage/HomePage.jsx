import React from 'react';
import MainCarosel from '../../Components/HomeCarosel/MainCarosel';
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/Mens/mens_kurta';
// import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  return (
    <div>

        <MainCarosel/>

        <div className='space-x-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Pant"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Womens tops"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Womens dress"}/>
        </div>
        
      
    </div>
  );
}

export default HomePage;
