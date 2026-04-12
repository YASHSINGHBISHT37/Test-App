import React, { useRef } from 'react'

const SearchBar = () => {

    const clear = useRef(null)
    const clearInput = () => {
        clear.current.value = ''
        clear.current.focus()
    }

    return (
        <div className='h-10.5 w-120 bg-blue-00 flex items-center bg-white/8 border-white/0 border rounded-full px-3 focus-within:outline-white/70 focus-within:outline  hover:bg-white/14 hover:border-white/14 transition-all duration-500 ease-in-out'>
            <img src="icons/search.png" className='h-7 opacity-60' />
            <input ref={clear} type="text" className=' outline-none rounded-full w-full px-2 text-[1.7vh]' placeholder='What do you want to play?' />
            <img src="icons/close.png" className='h-7 opacity-60 p-1.5 cursor-pointer' onClick={clearInput} />
        </div>
    )
}

export default SearchBar
