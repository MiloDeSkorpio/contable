import React from 'react';
//import data
import { overview  } from '../data';
const Overview = () => {
  //destrucutre overview data
  const {productImg } = overview
  return (
      <section className='lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
        <div className='container mx-auto flex justify-end overflow-hidden'>
          <img 
            src={productImg}
            alt='product Img'
            data-aos='fade-up'
            data-aos-delay='300'
          /> 

        </div>
      </section>
    )
};

export default Overview;
