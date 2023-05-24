import React from 'react';
//import data
import { footer } from '../data';
//import components
import emailjs from '@emailjs/browser'

const Testimonials = () => {

  const sendEmail = (e) => {
    e.preventDefault()
    const serviceID = 'default_service';
    const templateID = 'template_rpd00t8';
    emailjs.sendForm(serviceID, templateID, e.target, 'SrPwTLrUjuKyf1SmD')
      .then(() => {
        alert('Mensaje Enviado!');
        window.location.href = '/'
      }, (error) => {
        alert(JSON.stringify(error));
        window.location.href = '/'
      })
  }

  const { form } = footer
  return (
    <section className='bg-blue-50 section flex' id='contacto'>
      <div className='container mx-auto'>
        {/** title **/}
        <h2
          className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
        >Contáctanos</h2>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='800'
          >
            {/** form **/}
            <form className='bg-blue-100 max-w-[600px] rounded-lg mb-[10px] p-2 py-4 shadow-lg lg:w-[450px]' onSubmit={sendEmail}>
              <h2 className='text-4xl font-semibold mb-5 text-center'>Ingresa tus Datos</h2>
              <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
                <label className='font-semibold pr-4' for='nombre'>Nombre</label>
                <input
                  type='text'
                  className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                  placeholder={form.ph1}
                  name='nombre'
                  id='nombre'
                  required
                />
              </div>
              <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
                <label className='font-semibold pr-4' for='email'>Correo</label>
                <input
                  type='email'
                  className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                  placeholder={form.ph2}
                  name='email'
                  id='email'
                  required
                />
              </div>
              <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
                <label className='font-semibold pr-4' for='asunto'>Asunto</label>
                <input
                  type='text'
                  className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                  placeholder={form.ph3}
                  name='asunto'
                  id='asunto'
                  required
                />
              </div>
              <div className='h-[170px] p-[7px] flex flex-col items-center my-4'>
                <label className='font-semibold pr-4' for='mensaje'>Mensaje</label>
                <textarea
                  className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                  placeholder={form.ph4}
                  name='mensaje'
                  id='mensaje'
                  required
                />
              </div>
              <button
                id='buttonForm'
                className='btn btn-sm bg-blue-500 hover:bg-blue-600 w-full text-white'
              >{form.btnText}</button>
            </form>
            <span className='text-sm text-light'>{form.smallText}</span>
          </div>
          <div
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='800'
            className='p-5'
          >
            <img
              src={form.logo}
              alt='logof'
              width='540'
              height='540'
            />
          </div>
        </div>
      </div>

    </section>
  )
};

export default Testimonials;
