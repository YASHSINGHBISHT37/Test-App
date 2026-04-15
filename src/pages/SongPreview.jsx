import React, { useState } from 'react'

const SongPreview = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className='w-full h-full z-9999999 fixed'>
            <div className='w-full h-13 fixed bottom-3 left-0 px-3'>
                <div className='w-full rounded-full h-13 bg-[#eaa6c1] flex justify-between items-center p-1.5'>

                    <div className='w-full h-full flex items-center gap-3'>
                        <img src="/images/Drake.jpg" className='h-full rounded-full' />
                        <div className='flex-col leading-4'>
                            <h1 className='text-[1.8vh] tracking-tighter cursor-pointer hover:underline'>DOG HOUSE</h1>
                            <h1 className='text-white/65 text-[1.3vh] cursor-pointer hover:underline'>Drake, Wizkid, Kyla</h1>
                        </div>
                    </div>

                    <div className='gap-2 h-full relative cursor-pointer flex items-center justify-end' onClick={() => setIsPlaying(!isPlaying)}>
                        <img src="icons/add.png" className='w-6 h-6 rounded-full border-2 p-0.5' />
                        <img src={isPlaying ? 'icons/play.png' : 'icons/pause.png'} className={`'w-5 h-5 mr-2 invert object-contain ${isPlaying ? 'pl-1 w-5 h-5' : ''}`} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SongPreview
