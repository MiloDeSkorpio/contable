import React from 'react';
//import data
import { footer } from '../data';
//import components
import Copyright from '../components/Copyright';
const Footer = () => {
  //destrucure footer data
  const { logo, links, form, legal } = footer
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
          {/** list 1 **/}
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='500'
          >
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((item, index) => {
                //destrucutre item
                const { href, name } = item
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className='font-medium hover:text-accent transition'
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          {/** list 2 **/}
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='700'
          >
            <div className='text-2xl uppercase font-medium mb-6'>Legal</div>
            <ul className='flex flex-col gap-y-3'>
              {legal.map((item, index) => {
                //destrucutre item
                const { href, name } = item
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className='font-medium hover:text-accent transition'
                      >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <hr 
          className='mt-10 mb-5'
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-delay='200'
        />
        <Copyright />
      </div>
    </footer>

)
};

export default Footer;
