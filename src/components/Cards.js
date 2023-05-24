import { React, useState } from 'react';
//import data
import { product } from '../data';
//import images
import ArrowImg from '../assets/img/product/cards/arrow.svg'
const Cards = () => {
  //index state
  const [index, setIndex] = useState(1)
  //destructure product data
  const { cards } = product
  return (
    <>
      {/** cards **/}
      <div className='flex flex-col mb-1 md:grid md:col-span-2 md:grid-cols-3 gap-2'>
        {cards.map((card, cardIndex) => {
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
                className={`${index === cardIndex
                  ? 'bg-blue-300 shadow-2xl'
                  : 'border border-blue-500'
                  } w-[240px] h-[140px] md:w-[220px] bg-blue-200 flex flex-col items-center justify-center mx-auto p-[10px] text-center rounded-[15px] cursor-pointer transition-all`}
              >
                {/** card title **/}
                <div className='mb-3 text-[20px] font-semibold'>{title}</div>
                {/** card img **/}
                {index === cardIndex && <a href='#contacto'><img src={ArrowImg} alt='rowcard' width="16" height="8"/></a>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};

export default Cards;
