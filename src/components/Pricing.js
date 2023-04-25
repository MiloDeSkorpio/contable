import {React, useState} from 'react';
//import data
import { pricing } from '../data';
//import images
import ArrowImg from '../assets/img/product/cards/arrow.svg'

const Pricing = () => {
  //set index
  const [index, setIndex] = useState(1)
  //destructure pricing
  const {title, cards } = pricing
  return (
    <section className='bg-blue-50 section' id='form'>
      <div className='container mx-auto'>
        {/** title **/}
        <h2 
          className='h2 mb-10 lg:mb-20 text-center'
          data-aos='fade-up'
                data-aos-delay='200'
        >{title}</h2>
        {/** cards **/}
        <div className='grid grid-rows-1 gap-y-[20px] md:grid-cols-3 md:gap-y-[35px] lg:grid-cols-4 lg:gap-y-[30px] xl:grid-cols-5'>
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
                  }  w-[200px] h-[175px] rounded-[12px] bg-blue-200 flex flex-col items-center justify-center mx-auto p-[10px] text-center cursor-pointer transition-all                  
                  `}
                >
                  {/** card title **/}
                  <div className='text-[25px] font-semibold mb-3'>{title}</div>
                   {/** card img **/}
                {index === cardIndex &&  <a href='#form'><img src={ArrowImg} alt='rowcard' /></a>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default Pricing;
