import {React, useState }from 'react';
//import data
import { product } from '../data';
//import images
import ArrowImg from '../assets/img/product/cards/arrow.svg'
const Cards = () => {
  //index state
  const [index, setIndex ] = useState(1)
  //destructure product data
  const { cards } = product
  return (
    <>
      {/** cards **/}
      <div className='grid grid-rows-1 gap-y-[20px] md:grid-cols-3 md:gap-y-[35px] lg:grid-cols-4 lg:gap-y-[30px] xl:grid-cols-5'>
        {cards.map((card,cardIndex) => {
          //destructure card
          const { title, delay } = card
          return (
            <div
              key={cardIndex}
              data-aos='zoom-out'
              data-aos-offset='300'
              data-aos-delay={delay}
            >
              <div 
                onClick={() => setIndex(cardIndex)}
                className={`${index === cardIndex ? 'bg-blue-300 shadow-2xl' : 'border border-blue-500'} w-[200px] h-[175px] bg-blue-200 flex flex-col items-center justify-center mx-auto p-[10px] text-center rounded-[15px] cursor-pointer transition-all`}
              >
                {/** card title **/}
                <div className='mb-3 text-[25px] font-medium'>{title}</div>
                {/** card img **/}
                {index === cardIndex &&  <a href='#contacto'><img src={ArrowImg} alt='rowcard' /></a>}
              </div>
            </div>
          )
        })}
      </div>
    </>
    )
};

export default Cards;
