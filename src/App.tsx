import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SimpleButton from './components/SimpleButton';
import './App.css'

function App() {


  return (
    <div className='flex justify-center items-center h-screen bg-green-800'>
      < SimpleButton text = "Click Me"/>

    </div>
    
  )
}
export default App
