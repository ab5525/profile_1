import React from 'react'
import Navbar from './components/navbar'
import MainPage from './pages/MainPage'

export default function App() {
    return (
    <div>
        <Navbar name='Andrew' page1='Projects' page2='Contact'/>
        <MainPage />
    </div>
    )
  }