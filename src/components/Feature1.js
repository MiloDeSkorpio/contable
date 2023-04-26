import React from 'react';
//import data
import { features } from '../data';

const Feature1 = () => {
  //destructure features
  const { feature1} = features
  //destrucure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image} = feature1
  return (
    <section className='section bg-blue-50' id='mision'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/** text **/}
          <div 
            className='flex-1'
            data-aos='fade-rigth'
            data-aos-offset='400'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <a className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all' href='#vision'>
              {btnLink}<img 
                          src={btnIcon} 
                          alt='icon' 
                          className='text-blue-700'
                        />
            </a>
          </div>
          {/** image **/}
          <div 
            className='flex-1'
            data-aos='fade-left'
            data-aos-offset='300'
          >
            <img src={image} alt='feature' />
          </div>
        </div>

      </div>

    </section>
    )
};

export default Feature1;
