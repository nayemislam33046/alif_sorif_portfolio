import React from 'react'
import {BiSolidStar} from "react-icons/bi"
const Content = ({src,names,contents,alt,proffesion}) => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
     <div className='rounded w-[600px] md:w-[700px] backdrop-blur-sm bg-[#3f3c3c6b] border border-gray-600 px-5 py-10'>
      <p className='text-sm md:text-base'>{contents}</p>
      <div className='flex items-center gap-5'>
      <img src={src} alt={alt} className='w-10 rounded-full h-10'/>
      <div className='py-5'>
        <p>{names}</p>
        <p className='text-sm text-gray-500'>{proffesion}</p>
      </div>
      </div>
           <div className='text-orange-400 flex gap-1'>
           <BiSolidStar/>
           <BiSolidStar/>
           <BiSolidStar/>
           <BiSolidStar/>
           <BiSolidStar/>
           </div>
     </div>
    </div>
  )
}

export default Content