import React from 'react'
import photo from '../../utils/delivery-man.png'

function Modal({data}) {
  return (
    <>
    <div className='fixed z-50 top-0 left-0 w-full h-full bg-zinc-300 flex justify-center items-center bg-opacity-50'>
       <div className='w-[300px] h-[300px] bg-orange-200 rounded-lg flex items-center justify-center flex-col gap-5'>
          <img src={photo} className='w-[100px] h-[100px]'/>
          <h1 className='text-xl text-center font-bold'>Yayy..!!! Order Placed ✅🚀👍</h1>
          <button onClick={data} className='p-2 bg-yellow-100 rounded-lg'>Hide</button>
       </div>
    </div>
    </>
  )
}

export default Modal