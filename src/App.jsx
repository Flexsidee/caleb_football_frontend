import React from 'react'
import { basketball, volleyball, chess, football, logo } from './assets'
import { Link, NavLink } from 'react-router-dom'
import { LeagueTable, Stats, Fixtures } from './components/exports';

const App = () => {
  return (
    <div className='flex flex-col items-start gap-8 w-full h-[100vh]'>
      <nav className='flex flex-col items-start justify-start px-6 sm:px-2 bg-blue w-full'>
        {/* Logo and Competition Name */}
        <div className='flex items-center gap-4'>
          <img src={logo} className='w-20' alt='Caleb Logo'/>
          <h3 className='big_text text-white'>VC Cup</h3>
        </div>
      </nav>
      <div className='flex lg:flex-row flex-col items-start justify-between px-6 gap-6 lg:gap-0 w-[100%]'>
        <LeagueTable /> 
        <div className='flex flex-col items-start justify-start gap-6 lg:w-[25%] w-full'>
          <Stats />
          <Fixtures />
        </div>
      </div>
    </div>
  )
}

export default App;
