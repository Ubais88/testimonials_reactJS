import React, { useState } from 'react'
import Card from './Card'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

const Testimonials = (props) => {
  let review = props.reviews;
  const [index , setIndex] = useState(0);

  function leftShiftHandler(){
            if(index - 1 < 0){
                setIndex(review.length -1)
              }
            else{
              setIndex(index - 1)
            }
  }

  function rightShiftHandler(){
    if(index+1 >= review.length){
      setIndex(0);
    }
    else{
      setIndex(index+1)
    }

  }

  function surpriseHandler(){
    let rindex = Math.floor(Math.random() * review.length)
    setIndex(rindex);
  }

  return (
    <div className='w-[85vw] md:w-[700px] flex flex-col justify-center items-center mt-10 p-10 rounded-md transition-all duration-700 bg-white first-letter hover:shadow-xl'>
      <div>
        <Card review = {review[index]}/>
        <div className='flex text-3xl mt-9 gap-3 text-violet-400 justify-center'>
            <button onClick={leftShiftHandler} className='cursor-pointer  hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightShiftHandler} className='cursor-pointer  hover:text-violet-500'>
                <FiChevronRight/>
            </button>
        </div>

        <div className='mt-6'>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 translate-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
        </div>

      </div>
    </div>
  )
}

export default Testimonials