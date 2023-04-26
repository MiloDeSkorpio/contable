import React from 'react';
//import data
import { footer, copyright } from '../data';
//import components
import Copyright from '../components/Copyright';
const Footer = () => {
  //destrucure footer data
  const { logo } = footer
  const { social } = copyright
  return (
    <footer className='pt-[142px] pb-[60px] bg-blue-50'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
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
          {/** social icons **/}
          <div>
          <h2 className='text-xl font-semibold mb-4'>Redes Sociales</h2>
          <ul className='flex gap-x-[20px]'>
            {social.map((item,index) => {
              //destrucuture icon
              const { href, icon } = item
              return (
                <li key={index}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt='social' className='h-12 w-12'/>
                  </a>
                </li>
              )
            })}
          </ul>
          </div>
        <Copyright />
        </div>
      </div>
    </footer>

)
};

export default Footer;
