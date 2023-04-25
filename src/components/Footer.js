import React from 'react';
//import data
import { footer } from '../data';
//import components
import Copyright from '../components/Copyright';
const Footer = () => {
  //destrucure footer data
  const { logo } = footer
  return (
    <footer className='pt-[142px] pb-[60px] bg-blue-50'>
      <div className='container mx-auto'>
        <div className=' flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/** logo **/}
          <div 
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='300'
          >
            <img 
              src={logo} 
              alt='logof' 
              className='h-56 w-56'
              />
          </div>
        <hr 
          className='mt-10 mb-5'
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-delay='200'
        />
        <Copyright />
        </div>
      </div>
    </footer>

)
};

export default Footer;
