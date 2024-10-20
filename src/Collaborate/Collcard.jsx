import React from 'react'
const Collcard = ({src,title,contents,alt}) => {
  return (
    <div>
        <div className='text-center mt-10 flex justify-center items-center flex-col'>
        <img src={src} alt={alt} className='w-24'/>
        <p className='text-2xl py-4 font-semibold'>{title}</p>
        <p>{contents}</p>
        </div>
    </div>
  )
}
export default Collcard