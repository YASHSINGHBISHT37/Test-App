import React, { useEffect, useState } from 'react'

const ArtistPage = () => {
    const [scrolled, setScrolled] = useState(false)

    const popular = [
        { img: 'Drake', name: 'DOG HOUSE', streams: '72,232,235' },
        { img: 'Drake', name: 'DOG HOUSE', streams: '72,232,235' },
        { img: 'Drake', name: 'DOG HOUSE', streams: '72,232,235' },
        { img: 'Drake', name: 'DOG HOUSE', streams: '72,232,235' },
        { img: 'Drake', name: 'DOG HOUSE', streams: '72,232,235' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 280)
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className='w-full h-full pt-70 bg-black'>


            <div className={`w-full h-auto p-4 py-3 flex items-center justify-between fixed left-0 top-0 z-20  duration-300 ${scrolled ? "bg-[#121212]" : "bg-transparent"}`}>
                <div className={`w-9 h-9 bg-black/10 rounded-full p-3 flex items-center justify-between  ${scrolled ? "bg-transparent" : ""}`}>
                    <img src="/icons/arrow.png" className='rotate-225 w-full h-full' />
                </div>

                <h1 className={`text-[2.2vh] transition-colors duration-300 ${scrolled ? "text-white" : "text-transparent"}`}>Drake</h1>

                <div className='w-8 h-8 rounded-full p-2 flex items-center justify-between'></div>
            </div>

            <img src="/images/dp.jpeg" className='fixed left-0 top-0 w-full z-1 object-top-left' />

            <div className='w-full h-20 p-3 bg-gradient-to-t from-[#121212] to-transparent z-1 relative'>
                <h1 className='leading- text-4xl font-bold'>Drake</h1>
                <p className='text-[1.4vh] font-extralight text-white/70'>88.6M monthly listeners</p>
            </div>

            <div className='bg-[#121212] w-full h-auto relative z-1 pb-20'>
                <div className='w-full p-3 flex items-center justify-between'>
                    <h1 className='border inline p-2 rounded-full px-5 text-[1.6vh] border-white/50'>Follow</h1>

                    <div className='flex items-center gap-4'>
                        <img src="icons/shuffle.png" className='h-6' />
                        <div className='rounded-full flex items-center justify-center p-2.5 h-10 w-10 bg-green-400'>
                            <img src="icons/pause.png" className='h-full w-full' />
                        </div>
                    </div>
                </div>


                {/* Popular */}
                <div className='flex flex-col px-2'>

                    <div className='flex justify-between items-center px-2'>
                        <h1 className='text-[2vh] tracking-tighter mt-4 font-bold'>Popular</h1>
                    </div>

                    <div className='flex flex-col'>
                        {popular.map((song) => (

                            <div className='flex items-center justify-between cursor-pointer p-2 hover:bg-white/4 active:bg-white/7 rounded-[.4vh]'>
                                <div className='flex items-center gap-2.5'>
                                    <img src={`/images/${song.img}.jpg`} className='w-10 h-10 rounded-[0.4vh]' />
                                    <div className='leading-3.5'>
                                        <h1 className='leading- text-[1.6vh] tracking-tighter'>{song.name}</h1>
                                        <div className='flex items-center gap-1'>
                                            <p className='borde bg-white/20 rounded-[0.4vh] w-3.5 h-3.5 flex items-center justify-center pt-[0.2vh] text-[1.2vh]'>E</p>
                                            <h1 className='text-[1.2vh] tracking-tighter text-white/60  pt-[0.2vh]'>{song.streams}</h1>
                                        </div>
                                    </div>
                                </div>

                                <img src="icons/dots.png" className='h-4.5 w-54. cursor-pointer' />
                            </div>
                        ))}

                    </div>
                </div>


                {/* Albums */}
                <div className='flex flex-col px-2 mt-8'>

                    <div className='flex justify-between items-center px-2'>
                        <h1 className='text-[2vh] tracking-tighter mt-4 font-bold'>Albums</h1>
                        <img src="icons/arrow.png" className='h-3 rotate-45 cursor-pointer' />
                    </div>

                    <div className='flex overflow-x-scroll scrollbar-hide '>
                        {popular.map((song, i) => (

                            <div key={i} className='min-w-30 min-h-40 flex-shrink-0 flex flex-col gap-2 cursor-pointer hover:bg-white/7 active:bg-white/7 p-2 rounded-[0.4vh]'>
                                <img src={`/images/${song.img}.jpg`} className='w-38 h-38 rounded-[0.4vh]' />
                                <div className='leading-4'>
                                    <h1 className='text-[1.6vh] tracking-tighter'>{song.name}</h1>
                                    <div className='flex items-center gap-1'>
                                        <p className='borde bg-white/20 rounded-[0.4vh] w-3.5 h-3.5 flex items-center justify-center pt-[0.2vh] text-[1.2vh]'>E</p>
                                        <h1 className='text-[1.3vh] tracking-tighter text-white/60  pt-[0.2vh]'>2025</h1>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>


                {/* Singles & EPs */}
                <div className='flex flex-col px-2 mt-8'>

                    <div className='flex justify-between items-center px-2'>
                        <h1 className='text-[2vh] tracking-tighter mt-4 font-bold'>Singles & EPs</h1>
                        <img src="icons/arrow.png" className='h-3 rotate-45 cursor-pointer' />
                    </div>

                    <div className='flex overflow-x-scroll scrollbar-hide '>
                        {popular.map((song, i) => (

                            <div key={i} className='min-w-30 min-h-40 flex-shrink-0 flex flex-col gap-2 cursor-pointer hover:bg-white/7 active:bg-white/7 p-2 rounded-[0.4vh]'>
                                <img src={`/images/${song.img}.jpg`} className='w-38 h-38 rounded-[0.4vh]' />
                                <div className='leading-4'>
                                    <h1 className='leading- text-[1.6vh] tracking-tighter'>{song.name}</h1>
                                    <div className='flex items-center gap-1'>
                                        <p className='borde bg-white/20 rounded-[0.4vh] w-3.5 h-3.5 flex items-center justify-center pt-[0.2vh] text-[1.2vh]'>E</p>
                                        <h1 className='text-[1.3vh] tracking-tighter text-white/60  pt-[0.2vh]'>2025</h1>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>


                {/* About */}
                <div className='flex flex-col px-4 mt-8'>

                    <div className='flex justify-between items-center px-1 mb-1.5'>
                        <h1 className='text-[2vh] tracking-tighter mt-4 font-bold'>About</h1>
                    </div>

                    <div className='rounded-[0.8vh] bg-white/7 w-full h-auto'>
                        <img src="/images/dp.jpeg" className='w-full h-80 rounded-t-[0.8vh] object-cover' />

                        <div className='w-full h-auto p-3'>
                            <div className='flex justify-between items-center'>
                                <div className='pt-1'>
                                    <h1 className='leading-4 text-[2vh]'>Drake</h1>
                                    <p className='text-[1.2vh] font-extralight text-white/60'>88.6M monthly listeners</p>
                                </div>
                                <h1 className='border inline p-1.5 rounded-full px-5 text-[1.4vh] border-white/50 pt-2'>Follow</h1>
                            </div>

                            <p className='text-[1.2vh] text-white/50 leading-3 mt-4'>Canadian rapper and vocalist Drake has retained a bigger-than-life commercial presence shortly after he hit the scene in 2006, whether with his own chart-topping releases or with a long string of guest appearances on hits by the likes of...more</p>
                        </div>

                    </div>


                </div>

                {/* Featuring */}
                <div className='flex flex-col px-2 mt-8'>

                    <div className='flex justify-between items-center px-2'>
                        <h1 className='text-[2vh] tracking-tighter mt-4 font-bold'>Featuring Drake</h1>
                    </div>

                    <div className='flex overflow-x-scroll scrollbar-hide '>
                        {popular.map((song, i) => (

                            <div key={i} className='w-42 min-h-40 flex-shrink-0 flex flex-col gap-2 cursor-pointer hover:bg-white/7 active:bg-white/7 p-2 rounded-[0.4vh]'>
                                <img src={`/images/${song.img}.jpg`} className='w-38 h-38 rounded-[0.4vh]' />
                                <div className='leading-4'>
                                    <h1 className='mb-1 text-[1.6vh] tracking-tighter'>{song.name}</h1>
                                    <h1 className='text-[1.3vh] tracking-tighter text-white/50  pt-[0.2vh] leading-3'>202z,jd SAJ  Djsaj hbSAB s h bhs ba bdjbsmaj5</h1>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>


                {/* Fans also like */}
                <div className='flex flex-col px-2 mt-8'>

                    <div className='flex justify-between items-center px-2'>
                        <h1 className='text-[2vh] tracking-tighter mt-4 mb-2 font-bold'>Fans also like</h1>
                    </div>

                    <div className='flex overflow-x-scroll scrollbar-hide '>
                        {popular.map((song, i) => (

                            <div key={i} className='min-w-30 min-h-40 flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer hover:bg-white/7 active:bg-white/7 p-2 rounded-[0.4vh]'>
                                <img src={`/images/dp.jpeg`} className='w-38 h-38 rounded-full object-cover' />
                                <h1 className='leading- text-[1.8vh] tracking-tighter'>Drake</h1>
                            </div>
                        ))}

                    </div>

                </div>


            </div>
        </div>

    )
}

export default ArtistPage
