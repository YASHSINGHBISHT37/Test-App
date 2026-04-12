import React, { useRef } from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {

    return (
        <div className='fixed bg-black top-0 w-full h-14 border-white/20 flex justify-between items-center px-6'>
            <div className='h-full w-100 bg-amber-00  flex items-center gap-4'>
                <h1 className='font-bold'>MusicApp</h1>
            </div>

            <SearchBar/>

            <div className='h-full w-100 bg-red-00 flex items-center justify-end gap-2'>
                <div className='rounded-full h-8 w-8 bg-white cursor-pointer'></div>
                <div className='rounded-full h-8 w-8 bg-white cursor-pointer'></div>
                <div className='rounded-full h-8 w-8 bg-white cursor-pointer'></div>
            </div>

        </div>
    )
}

export default NavBar
