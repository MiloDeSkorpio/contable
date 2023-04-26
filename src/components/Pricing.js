import {React, useState} from 'react';
//import data
import { pricing } from '../data';
//import images
import ArrowImg from '../assets/img/product/cards/arrow.svg'

const Pricing = () => {
  //set index
  const [index, setIndex] = useState(1)
  //destructure pricing
  const {title, cards, img } = pricing
  return (
    <section className='bg-blue-50 section' id='laboral'>
      <div className='container mx-auto'>
        {/** title **/}
        <h2 
          className='h2 mb-10 lg:mb-15 text-center'
          data-aos='fade-up'
                data-aos-delay='200'
        >{title}</h2>
        <div className='flex flex-col lg:grid lg:grid-cols-3'>
        <img 
        src={img} 
        alt='logof'
        className='w-full h-full p-5 col-span-1' 
        />
        {/** cards **/}
        <div className='flex flex-col mb-1 md:grid md:col-span-2 md:grid-cols-3 gap-2'>
          {cards.map((card,cardIndex) => {
            //destructure card
            const { title, delay} = card
            //card
            return (
              <div 
                key={cardIndex}
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='300'
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${cardIndex === index 
                    ? 'bg-blue-300 shadow-xl'
                    :'border border-blue-500'
                  }  w-[240px] h-[140px] rounded-[15px] md:w-[220px] bg-blue-200 flex flex-col items-center justify-center mx-auto p-[10px] text-center cursor-pointer transition-all                  
                  `}
                >
                  {/** card title **/}
                  <div className='text-[20px] font-semibold mb-3'>{title}</div>
                   {/** card img **/}
                {index === cardIndex &&  <a href='#contacto'><img src={ArrowImg} alt='rowcard' /></a>}
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </section>
  )
};

export default Pricing;
