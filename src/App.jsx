import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from './components/main/Main'
import Info from './components/info/info'
import Footer from './components/footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <Main />
      <Info />
      <Footer />
    </div>
  )
}
