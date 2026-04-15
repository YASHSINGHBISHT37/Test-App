import React from 'react'
import Bar from './pages/Bar/Bar'
import NavBar from './pages/Nav/NavBar'
import Libarary from './pages/Main/Libarary'
import MainDisplay from './pages/Main/MainDisplay'
import PlayedMusic from './pages/PlayedMusic';
import ArtsistPage from './pages/ArtistPage';
import SongPreview from './pages/SongPreview'

const App = () => {
  return (
    <div className='relative w-screen h-screen bg-black text-white tracking-tight'>
      {/* <NavBar/> */}

      {/* <PlayedMusic /> */}
      <ArtsistPage/>

      <SongPreview/>

    </div>
  )
}

export default App
