import React from 'react';
//import data
import { features } from '../data';

const Feature3 = () => {
  //destructure features
  const { feature3 } = features
  //destrucure feature3
  const { pretitle, title, subtitle, btnLink1, btnLink2, btnIcon, image } = feature3
  return (
    <section className='section bg-blue-50' id='servicios'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/** image **/}
          <div
            className='flex-1 order-2 lg:order-1'
            data-aos='fade-rigth'
            data-aos-offset='300'
          >
            <img 
              src={image} 
              alt='feature'
              width='540'
              height='540'
            />
          </div>
          {/** text **/}
          <div
            className='flex-1 order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <a className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all mb-3' href='#contable'>
              {btnLink1}<img src={btnIcon} alt='icon' />
            </a>
            <a className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all' href='#laboral'>
              {btnLink2}<img src={btnIcon} alt='icon' width='24' height='24' />
            </a>
          </div>

        </div>

      </div>

    </section>
  )
};

export default Feature3;
