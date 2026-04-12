import React, { useState } from 'react'

const Bar = () => {
  const [click, setClick] = useState(null)

  return (
    <div className='fixed bg-black bottom-0 w-full h-17 flex justify-between px-4'>
      <div className='h-full w-100 bg-amber-00  flex items-center gap-4 p-2.5'>
        <img src="/images/Drake.jpg" className='h-full rounded-[6px]' />
        <div className='flex-col leading-6'>
          <h1 className='font- text-[0.8vw] cursor-pointer hover:underline'>One Dance</h1>
          <h1 className='text-white/65 cursor-pointer hover:underline'>Drake, Wizkid, Kyla</h1>
        </div>
      </div>

      <div className='h-full w-100 bg-blue-00 flex flex-col items-center gap-1 pt-3'>
        <div className='flex gap-6 justify-center items-center'>
          <img src="icons/back.png" className='h-4 opacity-80 cursor-pointer' />
          <div className='bg-white rounded-full w-8 h-8 p-2 flex justify-center items-center cursor-pointer'>
            {/* <img src="/icons/play.png" className='w-full h-full ' onClick={click ? 'play' : 'pause'} /> */}
            <img src="/icons/pause.png" className='w-full h-full' />
          </div>
          <img src="icons/next.png" className='h-4 opacity-80 cursor-pointer' />

        </div>

        <div className='flex justify-center items-center gap-1'>
          <h1 className='opacity-70 text-[1.3vh]'>0:00</h1>
          <div className='bg-white rounded-full h-1 w-140 opacity-70'></div>
          <h1 className='opacity-70 text-[1.3vh]'>3:18</h1>

        </div>
      </div>

      <div className='h-full w-100 bg-red-700'></div>

    </div>
  )
}

export default Bar
