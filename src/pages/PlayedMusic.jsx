import React, { useState } from 'react'

const PlayedMusic = () => {

    const feat = ['Drake', 'Julia Wolf', 'Yeat']
    const options = ['shuffle', 'loop', 'lyrics', 'like']
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className='w-full h-full bg-wh bg-[#EAA6C1] flex justify-center relative z-99'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>


            <div className='w-full h-full flex flex-col items-center p-6 relative'>

                <div className='flex items-start justify-between w-full'>
                    <img src="icons/down-arrow.png" className='w-6.5 h-6.5 cursor-pointer' />
                    <div className='flex-col flex justify-center items-center leading-3.5'>
                        <p className='opacity-60 text-[1.2vh] font-light tracking-tight'>NOW PLAYING</p>
                        <h1 className='tracking-tighter text-[1.4vh]'>DOG HOUSE</h1>
                    </div>
                    <img src="icons/dots.png" className='w-5 h-5 cursor-pointer' />

                </div>

                <div className='mt-12 w-full flex flex-col items-center'>
                    <img src="/images/Drake.jpg" className='rounded-[0.8vh] w-94 h-94 lg:w-130 lg:h-130' />

                    <div className=' w-full flex items-center justify-between mt-5'>
                        <div className='leading-5'>
                            <h1 className='tracking-tighter text-[2vh] font-extrabold hover:underline cursor-pointer'>DOG HOUSE (  feat. Julia Wolf & Yeat)</h1>
                            <p className='text-[1.6vh] tracking-tight flex flex-wrap'>
                                {feat.map((artist, i) => (
                                    <span key={i} className='hover:underline cursor-pointer mr-1 opacity-60 hover:opacity-100'>
                                        {artist}{i !== feat.length - 1 && ','}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <img src="icons/add.png" className='w-7 h-7 border-2 rounded-full p-[0.6vh] cursor-pointer' />
                    </div>

                    <div className='w-full h-auto mt-8'>
                        <div className='w-full bg-white/7 h-1 relative rounded-full cursor-pointer'>
                            <div className='w-2 h-2 bg-white rounded-full absolute -top-0.5'></div>
                        </div>
                        <div className='flex justify-between items-center text-[1.4vh] mt-2 tracking-tighter'>
                            <p>0:00</p>
                            <p>3:14</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between  mt-4 w-full gap-12 lg:px-190'>
                    <img src="icons/loop.png" className='w-6 h-6 object-contain opacity-70 cursor-pointer active:opacity-100' />

                    <div className='flex items-center justify-between w-full'>
                        <img src="icons/back.png" className='w-7 h-7 object- cursor-pointer active:opacity-100' />
                        <div className='bg-white rounded-full w-30 h-17 p-5.5 relative active:bg-white/90 cursor-pointer' onClick={() => setIsPlaying(!isPlaying)}>
                            <img src={isPlaying ? 'icons/play.png' : 'icons/pause.png'} className={`w-full h-full object-contain ${isPlaying ? 'pl-1' : ''}`} />
                        </div>
                        <img src="icons/next.png" className='w-7 h-7 object-contain cursor-pointer active:opacity-100' />
                    </div>
                    <img src="icons/sleep.png" className='w-6 h-6 object-contain opacity-70 cursor-pointer active:opacity-100' />

                </div>


                <div className='bg-whit w-full rounded-full flex justify-between items-center gap-1 mt-8'>
                    <div className='flex gap-1 h-10'>
                        {options.map((opt, j) => (
                            <div className={`border flex items-center justify-center border-white/30 rounded-[0.6vh] active:bg-white/7 ${j === 0 ? 'rounded-l-full pl-1.5' : ''} ${j === options.length - 1 ? 'rounded-r-full pr-1.5' : ''}`}>
                                <img src={`/icons/${opt}.png`} className={` h-8.5 w-10 object-contain p-1.5 cursor-pointer `} />
                            </div>
                        ))}
                    </div>


                    <div className='flex items-center gap-4'>
                        <img src="icons/share.png" className='h-5 cursor-pointer hover:opacity-80 active:opacity-80' />
                        <img src="icons/queue.png" className='h-5 cursor-pointer hover:opacity-80 active:opacity-80' />
                    </div>
                </div>

                <div className='w-full h-auto mt-8 flex justify-between items-center gap-2 '>
                    <img src="icons/low-volume.png" className='w-5 h-5 opacity-40' />

                    <div className='w-full bg-white/7 h-1 relative rounded-full'>
                        <div className='w-2 h-2 bg-white rounded-full absolute -top-0.5'></div>
                    </div>
                    <img src="icons/medium-volume.png" className='w-5 h-5 opacity-40' />

                </div>

            </div>

        </div>
    )
}

export default PlayedMusic
