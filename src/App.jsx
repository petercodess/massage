import { useState } from 'react'
import Nav from './Nav'
import './App.css'
import icon from '/download.png'
import Intro from './Intro';

function App() {
  return (
    <>
        <Nav />
      <div className='bd h-screen flex justify-center items-center flex-col'>
        <img src={icon} className='rounded-full' />
        <h1 className='text-4xl font-bold text-center mt-8 text-slate-950 sam relative'>Danielle's Massage Envy</h1>
      </div>
      <Intro />
      <footer className='bg-slate-900 text-red-600 text-center p-4 flex justify-around md:flex-row gap-3 flex-col' id='bk'>
        <a href=''>BOOK ME!</a>
        <p>Cashapp: $DaniellaHiggins</p>
        <p>More payment methods soon!!</p>
        <p>Once you’ve confirmed your payment, send a screenshot to your masseuse to book a session.</p>
      </footer>
    </>
  );
}

export default App
