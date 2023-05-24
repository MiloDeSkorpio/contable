import React from 'react';
//import data
import { product } from '../data';
//import components
import Cards from './Cards'
const Product = () => {
  //destrucure product data
  const { title, img } = product
  return (
    <section className='section bg-blue-50' id='contable'>
      <div className='container mx-auto'>
        {/** title & subtitle **/}
        <div className='flex flex-col items-center mb-10 lg:mb-15'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'
          >
            {title}
          </h2>
        </div>
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-3'>
          <Cards />
          <div
            data-aos='fade-left'
            data-aos-offset='300'
          >
            <img
              src={img}
              alt='logof'
              className='w-full h-full col-span-1 p-4'
              width="16" 
              height="8"
            />
          </div>
        </div>
      </div>

    </section>
  )
};

export default Product;
