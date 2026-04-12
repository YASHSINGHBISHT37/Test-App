import React from 'react'
import Bar from './pages/Bar/Bar'
import MusicPlayer from './pages/MusicPlayer'
import NavBar from './pages/Nav/NavBar'
import Libarary from './pages/Main/Libarary'
import MainDisplay from './pages/Main/MainDisplay'
import PlayedMusic from './pages/PlayedMusic';

const App = () => {
  return (
    <div className='relative w-screen h-screen bg-black text-white'>
      {/* <NavBar className='bg-red-500' /> */}
      {/* <MainDisplay/> */}
      {/* <Bar/> */}
      {/* <MusicPlayer/> */}

      <PlayedMusic/>

    </div>
  )
}

export default App
