import React from 'react';
//import data
import { footer } from '../data';
//import components


const Testimonials = () => {
  //destructure testimonials
const { form } = footer
  return (
    <section className='bg-blue-50 section flex' id='contacto'>
      <div className='container mx-auto'>
        {/** title **/} 
        <h2 
          className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
        >Contactanos</h2>
        <div className='flex flex-col-reverse lg:flex-row'>
          <div
              data-aos='fade-up'
              data-aos-offset='200'
              data-aos-delay='800'
          >
              {/** form **/}
              <form className='bg-blue-100 max-w-[600px] rounded-lg mb-[10px] p-2 py-4 shadow-lg'>
                  <h2 className='text-4xl font-semibold mb-5 text-center'>Ingresa tus Datos</h2>
                  <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
                    <label className='font-semibold pr-4'>Nombre</label>
                    <input 
                      type='text' 
                      className='w-96 h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                      placeholder={form.ph1}
                    />
                  </div>
                  <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
                    <label className='font-semibold pr-4'>Correo</label>
                    <input 
                      type='text' 
                      className='w-96 h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                      placeholder={form.ph2}
                    />
                  </div>
                  <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
                    <label className='font-semibold pr-4'>Asunto</label>
                    <input 
                      type='text' 
                      className='w-96 h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                      placeholder={form.ph3}
                    />
                  </div>
                  <div className='h-[170px] p-[7px] flex flex-col items-center my-4'>
                    <label className='font-semibold pr-4'>Mensaje</label>
                    <textarea 
                      className='w-96 h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                      placeholder={form.ph4}
                    />
                  </div>
                  <button className='btn btn-sm bg-blue-500 hover:bg-blue-600 w-full text-white'>{form.btnText}</button>
              </form>
              <span className='text-sm text-light'>{form.smallText}</span>
          </div>
          <div
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='800'
          >
            <img 
                src={form.logo} 
                alt='logof'
              />
          </div>
        </div>
      </div>

    </section>
  )
};

export default Testimonials;
